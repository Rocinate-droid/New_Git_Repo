const http  = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("hello there");
    }
    else if (req.url === '/about') {
        res.end("about page");
    } else {
      res.end();  
    }
    
})

server.listen(5000);