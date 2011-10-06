require("http").createServer(function (req, res) {
	res.writeHead(200, {});
	// This is a simple app.
	res.end("Hello, user! You are awesome. That is all.");
	// Pretend I added the ability to move the selector up/down
	// Pretend I fixed the bug #3
}).listen(80);
