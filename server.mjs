import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
const files = new Set(['/index.html', '/styles.css', '/app.js']);
const port = Number(process.env.PORT || 3000);
http.createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  const file = path === '/' ? '/index.html' : path;
  if (!files.has(file)) { res.writeHead(404); res.end('Not found'); return; }
  try {
    const body = await readFile(new URL(`.${file}`, import.meta.url));
    res.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' })[extname(file)] + '; charset=utf-8' });
    res.end(body);
  } catch { res.writeHead(500); res.end('Unable to load application'); }
}).listen(port, '127.0.0.1', () => console.log(`CourtFlow is running at http://localhost:${port}`));
