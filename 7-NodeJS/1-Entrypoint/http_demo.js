const http = require('http')

//Create server object
http.createServer((req, res) => {
    //write response
    res.write('<h1>Hello FBW$ HEROES</h1>');
    res.end();
}).listen(8000, () => console.log('server is running ...'))