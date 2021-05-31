const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');

const server = http.createServer(function (req, res) {
  var str = "";
  req.on("data", function (data) {
    str += data;
  })
  req.on("end", function () {
    const obj = urlLib.parse(req.url, true)
    const url = obj.pathname;
    const GET = obj.query;
    const POST = querystring.parse(str);

    console.log("url", url);
    console.log("GET", GET);
    console.log("POST", GET);
    res.end()
  })
})

server.listen(8080)