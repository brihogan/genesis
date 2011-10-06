require("http").createServer(function (req, res) {
	res.writeHead(200, {});
	// This is a simple app.
	res.end("Hello, user! You are awesome. That is all.");
	// Pretend I added the ability to move the selector up/down
	// Pretend I fixed the bug #3
	// close test issue #5
	// close test issue #4
	// comment on #3
}).listen(80);
