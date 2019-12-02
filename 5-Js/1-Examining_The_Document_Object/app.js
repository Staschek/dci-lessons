// var player = document.getElementById('toAnimate').animate([], {
//     duration: 700, //milliseconds
//     easing: 'ease-in-out', //'linear', a bezier curve, etc.
//     delay: 10, //milliseconds
//     iterations: Infinity, //or a number
//     direction: 'alternate', //'normal', 'reverse', etc.
//     fill: 'forwards' //'backwards', 'both', 'none', 'auto'
//   });

let player = document.getElementById('toAnimate');
player.addEventListener('mouseover', function ani(){
    player.animate([
        { transform: 'scale(1)', opacity: 1, offset: 0 },
        { transform: 'scale(.9)', opacity: .9, offset: .3 },
        { transform: 'scale(.8)', opacity: .8, offset: .5 },
        { transform: 'scale(.7)', opacity: .7, offset: .7 },
        { transform: 'scale(.6)', opacity: .6, offset: 1 }
    ], {
    duration: 500, //milliseconds
    easing: 'ease-in-out', //'linear', a bezier curve, etc.
    delay: 10, //milliseconds
    iterations: 1, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
});
}, false);

player.addEventListener('mouseleave', function ani(){
    player.animate([
        { transform: 'scale(1)', opacity: 1, offset: 0 },
        { transform: 'scale(.9)', opacity: .9, offset: .3 },
        { transform: 'scale(.8)', opacity: .8, offset: .5 },
        { transform: 'scale(.7)', opacity: .7, offset: .7 },
        { transform: 'scale(.6)', opacity: .6, offset: 1 }
    ], {
    duration: 500, //milliseconds
    easing: 'ease-in-out', //'linear', a bezier curve, etc.
    delay: 10, //milliseconds
    iterations: 1, //or a number
    direction: 'reverse', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
});
}, false);

 // console.log(player)


  let val;
val = document;
//val = document.all;
// val = document.all.length;
// val = document.all[0];
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].action;
// val = document.forms[0].method;

// val = document.links;
// val = document.links[0];
// document.links[0].id = 'dynamicPower'
// val = document.links[0].id;
// val = document.links[0].id;
// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');
// let scripts = document.scripts;
// let scriptArr = Array.from(scripts);

// scriptArr.forEach(function(item){
//     console.log(item.getAttribute('src'))
// });

//Changing styling
// const taskTitle = document.getElementById('task-title')
// taskTitle.style.background = '#333'
// taskTitle.style.color = '#fff'
// taskTitle.style.padding = '5px'

//change the content
// taskTitle.textContent = 'Backlog'
//taskTitle.innerText = 'Saschas Task'
//taskTitle.innerHTML = '<span style="color:#4db6ac">Backlog</span>'  //again because best Name

// console.log(document.querySelector('h5'))
// console.log(document.querySelector('#task-title'))

//# stands for getElementById

//console.log(document.querySelector('li'))       //always getting the first element of the document

document.querySelector('li').style.color = 'red'
document.querySelector('ul li').style.color = '#4db6ac'
document.querySelector('li:last-child').style.color = '#4db6ac'
document.querySelector('li:nth-child(3)').style.color = '#4db6ac'
document.querySelector('li:nth-child(odd)').style.background = '#eee'
document.querySelector('li:nth-child(even)').style.background = '#ccc'
document.querySelector('li:nth-child(3)').style.background = '#eee'






const items = document.getElementsByClassName('collection-item')
// console.log(items)
// console.log(typeof items)

// val = document.querySelector('ul')

// console.log(val)
// console.log(typeof val)

// val = document.querySelector('ul').getElementsByClassName('collection-item')
// console.log(val)
// console.log(typeof val)

items[4].style.background = '#eee'
items[3].style.background = '#ccc'

let reg = /List\sItem/
let arr = ['welding', 'mobil phone', 'jobcenter', 'laundry', 'watch TV']
let arr2 = ['red', 'blue', 'black', '#ccc', 'green']

let lis = Array.from(items);
lis.reverse()

for(i=0;i<items.length;i++){
    items[i].innerHTML = items[i].innerHTML.replace(reg,arr[i])
  //  console.log(lis[i])
}


lis.forEach(function(item, index){
    item.innerHTML = `<span style="color: ">Task No.${index+1} </span><a href="#" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
    </a>`
    console.log(item)
});

