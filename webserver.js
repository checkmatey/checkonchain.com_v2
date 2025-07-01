const express = require('express');
const server = express();
const port = 80

server.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
server.use('/hosted_charts', express.static(`${__dirname}/hosted_charts`));
server.use('/', express.static(`${__dirname}/`));

server.listen(port, () => {
	console.log(`Server listening at ${port}`);
});