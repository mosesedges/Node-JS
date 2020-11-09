const path = require('path');

// base file name

console.log(path.basename(__filename));

// Directory name

console.log(path.dirname(__filename));

// extension name

console.log(path.extname(__filename));

// create path object

console.log(path.parse(__filename).base);

// concatenate paths

console.log(path.join(__dirname, 'text', 'hello uwa'));
