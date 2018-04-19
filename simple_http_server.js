const http = require('http');
const qs = require('querystring');
const server = http.createServer();
server.listen(8808);
console.log('监听8808端口：Simple_http_server');
server.on('request', (req, res) => {
    const url = req.url;
    const queryString = url.substring(url.indexOf('?') + 1);
    const query = qs.parse(queryString);

    console.log(query);

    res.statusCode = 200;
    res.end('welcome to my first http server')
});
