import { cp, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = 'dist';
const assets = 'assets';

await mkdir(join(dist, assets), { recursive: true });
await cp(assets, join(dist, assets), { recursive: true });

await writeFile(join(dist, 'index.html'), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=email.html">
    <title>Sweetgreen Email Portfolio Preview</title>
  </head>
  <body>
    <p><a href="email.html">Open the email preview</a></p>
  </body>
</html>
`);
