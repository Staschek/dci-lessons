//  My Solution //
/* inside the strong tag its not working there*/

/*
const tbl = document.querySelectorAll('td')
// let arr = Array.from(tbl)
//let arr = tbl.closest('td')

for(elem of tbl){
    //console.log(elem)
    elem.addEventListener('dblclick', enter)
}

function  enter(e){
    let x = event.target.innerHTML
    let td = event.target.closest('td')
    let textArea = document.createElement('textarea');
    //td.removeEventListener('dblclick',e)
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';
   // textArea.value = x;
    
    //console.log(td.lastChild)

    if(td.lastChild){

        if(!td.lastChild.className){
            td.innerHTML= '';
            td.appendChild(textArea);
            td.firstChild.value = x;
            td.insertAdjacentHTML('beforeEnd', '<div class="edit-controls"><input type="button" value="OK" class="edit-ok"><input type="button" value="Cancel" class="edit-error"></div>');
        }
                
         td.lastChild.firstChild.addEventListener('click',ok)
         td.lastChild.lastChild.addEventListener('click',cancel)
        function ok(event){
            td.innerHTML = event.target.parentElement.parentElement.firstChild.value
        }
        function cancel(){
            td.innerHTML = x
        }
    }
}
*/




const table = document.getElementById('bagua-table');
let editingTd = null;
table.addEventListener('click', function(event){
    //3 possible targets
    let target = event.target.closest('.edit-cancel, .edit-ok, td')
    if(!table.contains(target)) {return}
        if(target.className == 'edit-cancel'){
                target.onkeydown = function(event) {
            if (event.key == 'Enter') {
                finishTdEdit(target, editingTd.data)
            }
        };

        }else if(target.className == 'edit-ok'){
            target.onkeydown = function(event) {
                if (event.key == 'Enter') {
                    finishTdEdit(target, editingTd.data)
                }
            };        
    }else if (target.nodeName == 'TD'){
            makeTdEditable(target)    
    }
})

//E
function finishTdEdit(target, td, isOK){
    console.log(td)
    if(target.className == 'edit-ok'){
        td.innerHTML = td.firstChild.value
    }else if(target.className == 'edit-cancel'){
        td.innerHTML = editingTd.data 
    }
}

//Event Handler:currently the real event target is the td
function makeTdEditable(td){
    //let td = event.target
    let textArea = document.createElement('textarea')

    editingTd = {
        elem: td,
        data: td.innerHTML
    }
    //td is in edit state, CSS also styles the area inside
    td.classList.add('edit-td')

    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';
    textArea.value = editingTd.data;
    td.innerHTML = '';
    td.appendChild(textArea)
    textArea.focus();

    td.insertAdjacentHTML('beforeEnd', '<div class="edit-controls"><button class="edit-ok">OK</cancel><button  class="edit-cancel">Cancel</button></div>');

}

