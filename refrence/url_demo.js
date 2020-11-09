const url = require('url');

const myUrl = new URL('http://mywebsite.com/about.html?id=100&status=active');

// serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// param Object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('name', 'kevin');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${value}: ${name}`));
