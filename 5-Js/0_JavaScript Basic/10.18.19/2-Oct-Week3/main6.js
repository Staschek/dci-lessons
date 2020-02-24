let pattern = /\//; 
function subReddit(link) {
    let result = link.split(pattern)
	return result[result.length-2];
}
let x = subReddit("https://www.reddit.com/r/funny/");
console.log(x)
