const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const onError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1);
  }
};

const onListening = () => {
  console.log(`Server listening on port ${port}`);
};

server.on('error', onError);
server.on('listening', onListening);

server.listen(port);