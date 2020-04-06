const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  //Build file path : ,ale the file path dynamic
  let filePath = path.join(
    __dirname,
    'puplic',
    req.url === '/' ? 'index.html' : req.url
  );

  //Extenstion of file
  let extName = path.extname(filePath);
});

//console.log(server, '---------------------\n', http);
const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log('Server is running on ');
});
