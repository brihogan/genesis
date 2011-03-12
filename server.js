require("http").createServer(function (req, res) {
  res.writeHead(200, {});
  res.end("Hello, user! You are awesome. That is all.");
}).listen(80);
