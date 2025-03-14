// filepath: c:\Users\jheni\Documents\Faculdade\3 Semestre\PI\Site-Institucional-IMA\public\js\server.js
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 5000');
});