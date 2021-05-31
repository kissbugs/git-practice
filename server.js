const http = require('http');

const server = http.createServer(function (req, res) {
  res.write("hello node.js !!!")
  res.end()
})

server.listen(8080)