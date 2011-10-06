require("http").createServer(function (req, res) {
	res.writeHead(200, {});
	// This is a simple app.
	res.end("Hello, user! You are awesome. That is all.");
}).listen(80);
