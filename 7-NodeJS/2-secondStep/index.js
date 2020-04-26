const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');


const server = http.createServer((req, res) => {
  //Build file path : ,ale the file path dynamic
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );
  //Extenstion of file
  let extName = path.extname(filePath);
  //Initiale Dafault content Type
  let contentType = 'text/html';

  //Check Ext and set content Type
  switch (extName) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
  }

  //Check if ht econtentType is text/html and the extName is "", add .html
  if (contentType == 'text/html' && extName == '') filePath += '.html';

  console.log(extName, filePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENODENT') {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(404, {
            'Content-Type': 'text/html'
          })
          res.end(content, 'utf8')
        })
      } else {
        res.writeHead(500)
        res.end(`Server-Error: ${err.code}`)
      }
    } else {
      //Success
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content, 'utf8')
    }
  });
});

dotenv.config();
console.log(process.env.PORT);

//console.log(server, '---------------------\n', http);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log('Server is running on ');
});
