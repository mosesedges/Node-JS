const http = require('http');

// create a server

http
	.createServer((req, res) => {
		// write response
		res.write('it is absolately working ');
		res.end();
	})
	.listen(5000, () => console.log('server running...'));
