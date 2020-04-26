const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  //console.log(req.url == '/');
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'puplic', 'index.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.end(data);
    });
  } else if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'puplic', 'about.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.end(data);
    });
  } else if (req.url === '/api/users') {
    fs.readFile(path.join(__dirname, 'useres', 'user.json'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end(data);
    });
  }
});

//console.log(server, '---------------------\n', http);
const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log('Server is running on ');
});
