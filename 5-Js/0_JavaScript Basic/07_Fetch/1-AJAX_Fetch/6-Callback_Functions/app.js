const posts = [{
    title: 'Post one',
    body: 'This is amazing post one'
},
{
    title: 'Post two',
    body: 'This is amazing post two'
}]

//Synchronized Callback function
function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback()
    }, 3000);
}
function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(item){
            output += `<li>${item.body}</li>`
        });
        document.body.firstElementChild.insertAdjacentHTML('afterend', output) 
    }, 2000);

}

let p1 = {
title: 'Post three',
body: 'This is amazing post three'
}

createPost(p1, getPosts)
