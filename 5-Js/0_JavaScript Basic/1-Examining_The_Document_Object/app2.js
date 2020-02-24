let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
//val = list.childNodes[0];
//val = list.childNodes[0].nodeName;
//val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';
list.children[1].style.color = 'red';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0].children;

// let test = document.body.children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[1]
// console.log(test)

val = list.lastChild;
val = list.lastElementChild;
val = list.childElementCount;
val = listItem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
val = listItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Excisise Text red

val = list.children

function changeRed(val){
    listArr = Array.from(val)
    listArr.forEach(element => {
        element.style.color == "red" ? element.innerText = 'Done!!!' : console.log('nix') 
        
    });

    for(i=0;i<listArr.length;i++){
        console.log(listArr.children)
    }
}
changeRed(val)
console.log(val)

