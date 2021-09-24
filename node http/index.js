const http = require('http');
const hostname = 'localhost';
const fs = require('fs');
const path = require('path');

const port = 3000;
const myhttp = http.createServer((req, res) => {
    console.log("Request for " + req.url + 'by method ' + req.method);
    if (req.method == 'GET') {
        let fileUrl;
        if (req.url == '/') fileUrl = '/index.html'
        else fileUrl = req.url;
        let filePath = path.resolve('./public' + fileUrl);
        const fileExtension = path.extname(filePath)
        if (fileExtension == '.html') {
            fs.exists(filePath, (exists) => {
            //     if (!exists) {
            //         res.statusCode = 404;
            //         res.setHeader('ContetnType', 'text/html');
            //         res.end('<html><body><h1>' + req.url + 'Not Found </h1></body</html>>')
            //         return;
            //     };
            // }

            
            console.log('filePath :  '+filePath);
            console.log('fileUrl: '+fileUrl);
            console.log('reqUrl: '+req.url);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Hello world</h1></body></html>');
            fs.createReadStream(filePath).pipe(res);
        };
    }
        else {
            res.statusCode = 404;
            res.setHeader('ContetnType', 'text/html');
            res.end('<html><body><h1>' + req.method + ' is not html </h1></body</html>>')
        }
    

})
myhttp.listen(port, hostname, () => {
    console.log(`listining to server http://${hostname}:${port}`);
})