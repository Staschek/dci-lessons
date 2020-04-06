const URL = require("url").URL;
const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

console.log(myUrl)

//Param Object
let counter = 101

myUrl.username = 'staschek'

console.log(myUrl.username)

myUrl.search = '?id=200&status=inactive'

console.log(myUrl.searchParams);