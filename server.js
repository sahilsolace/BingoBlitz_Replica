const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const https = require('https');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  if (reqPath === '/bingo-card-generator' || reqPath === '/bingo-card-generator/' || reqPath.startsWith('/generator/')) {
    reqPath = '/generator.html';
  }

  // Handle /wp-content/ and /wp-includes/ requests by proxying and caching locally
  if (reqPath.startsWith('/wp-content/') || reqPath.startsWith('/wp-includes/')) {
    const localTarget = path.join(__dirname, reqPath);
    if (fs.existsSync(localTarget)) {
      const ext = path.extname(localTarget).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      return fs.createReadStream(localTarget).pipe(res);
    }

    const remoteUrl = 'https://www.bingoblitz.com' + req.url;
    https.get(remoteUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, remoteRes => {
      if (remoteRes.statusCode === 200) {
        fs.mkdirSync(path.dirname(localTarget), { recursive: true });
        const fileStream = fs.createWriteStream(localTarget);
        remoteRes.pipe(fileStream);
      }
      res.writeHead(remoteRes.statusCode, {
        'Content-Type': remoteRes.headers['content-type'] || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*'
      });
      remoteRes.pipe(res);
    }).on('error', () => {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    });
    return;
  }

  const filePath = path.join(__dirname, reqPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Bingo Blitz local replica running at http://127.0.0.1:${PORT}/`);
});
