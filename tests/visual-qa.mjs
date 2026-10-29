#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const viewports = [320, 390, 600, 1440];
const htmlFile = resolve('dist/email.html');
const screenshotDir = resolve('tests/screenshots');
const reportPath = resolve('docs/QA_REPORT.md');

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('Playwright is unavailable. Run: npm install --save-dev @playwright/test && npx playwright install chromium');
  process.exit(2);
}

const html = await readFile(htmlFile);
await mkdir(screenshotDir, { recursive: true });

let browser;
try {
  browser = await chromium.launch({ headless: true });
  const results = [];

  for (const width of viewports) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(pathToFileURL(htmlFile).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts?.ready);

    const info = await page.evaluate(() => {
      const doc = document.documentElement;
      const images = [...document.images].map((img) => ({
        loaded: img.complete && img.naturalWidth > 0,
        alt: img.hasAttribute('alt'),
      }));
      const links = [...document.querySelectorAll('a')].map((a) => a.getAttribute('href') || '');
      return {
        overflow: doc.scrollWidth > innerWidth + 1,
        unloadedImages: images.filter((image) => !image.loaded).length,
        missingAlt: images.filter((image) => !image.alt).length,
        placeholderLinks: links.filter((href) => href === '#').length,
      };
    });

    const filename = join(screenshotDir, `email-${width}px.png`);
    await page.screenshot({ path: filename, fullPage: true });
    results.push({ width, filename, ...info });
    await page.close();
  }

  const lines = [
    '# Browser Visual QA',
    '',
    `Source: ${htmlFile}`,
    `Compiled HTML bytes: **${html.byteLength}**`,
    '',
    '**Browser-only evidence:** this does not prove Gmail, Apple Mail, Outlook, or ESP compatibility.',
    '',
    '| Width | Overflow | Unloaded images | Missing alt | Placeholder links | Screenshot |',
    '|---:|---|---:|---:|---:|---|',
    ...results.map((result) => `| ${result.width}px | ${result.overflow ? 'YES' : 'No'} | ${result.unloadedImages} | ${result.missingAlt} | ${result.placeholderLinks} | ${result.filename} |`),
    '',
    '## Manual review remaining',
    '',
    '- [ ] Compare against the supplied design for crop, spacing, and hierarchy.',
    '- [ ] Test with images disabled.',
    '- [ ] Test target Gmail, Apple Mail, and Outlook clients.',
    '- [ ] Replace provisional copy and local asset path after ESP hosting is configured.',
  ];

  await writeFile(reportPath, `${lines.join('\n')}\n`);
  console.log(`Wrote ${reportPath} and ${results.length} screenshots.`);
  if (results.some((result) => result.overflow || result.unloadedImages > 0)) process.exitCode = 1;
} finally {
  if (browser) await browser.close();
}
