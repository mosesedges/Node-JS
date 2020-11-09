const fs = require('fs');
const path = require('path');

// // create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
// 	if (err) throw err;
// 	console.log('folder has been removed');
// });

// // create and write file

// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'what is our fist decision lets stick to it!',
// 	(err) => {
// 		if (err) throw err;
// 		console.log('folder has been created and written on.');

// 		// file append

// 		fs.appendFile(
// 			path.join(__dirname, '/test', 'hello.txt'),
// 			"just incase plan A dosen't work!",
// 			(err) => {
// 				if (err) throw err;
// 				console.log('a file has been appended to the existing one.');
// 			}
// 		);
// 	}
// );

// read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// rename file
fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'about.txt'),
	(err) => {
		if (err) throw err;
		console.log('file has been renamed check it out');
	}
);
