const { createServer } = require('http');
const { stdout } = require('process');
const url = require('url');
const { registerSvc, updateSvc } = require('./worker.service');

let server;

function run() {
  server = createServer((req, res) => {
    function respond(statusCode, message) {
      res.statusCode = statusCode || 200;
      res.write(message || '');
      res.end();
      return;
    }

    const uri = url.parse(req.url, true);
    switch (uri.pathname) {
      case '/register':
        if (req.method === 'POST') {
          registerSvc(req, res);
          return;
        } else {
          respond(404);
        }
        break;
      case '/update':
        if (req.method === 'POST') {
          return updateSvc(req, res);
        } else {
          respond(404);
        }
        break;

      default:
        break;
    }
  });

  const PORT = 7878;
  server.listen(PORT, () => {
    stdout.write(`🚀 server WORKER listening on port ${PORT}\n`);
  });
}

module.exports = {
  run,
};
