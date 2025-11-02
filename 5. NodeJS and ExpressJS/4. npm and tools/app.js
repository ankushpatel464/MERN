const http = require('http');

const {handler} = require('/.RequestHandler');

const server = http.createServer(handler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${3001}`);
});