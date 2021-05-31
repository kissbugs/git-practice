const http = require('http');

const server = http.createServer(function (req, res) {
  res.write("hello node")
  res.end()
})

server.listen(8080)