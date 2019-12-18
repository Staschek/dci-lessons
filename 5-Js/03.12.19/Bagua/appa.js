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
table.onclick =  function(event){
    //3 possible targets
   // console.log(event.target)
 //    this.onkeydown = console.log(event.key)

    let target = event.target.closest('.edit-cancel,.edit-ok,td')
    if(!table.contains(target)) return;

        if(target.className == 'edit-cancel'){
                //target.onkeydown = function(event) {
                finishTdEdit(false, editingTd.elem)
       // };

        }else if(target.className == 'edit-ok'){
            
                    finishTdEdit(true, editingTd.elem)
                
                  
    }else if (target.nodeName == 'TD'){
        if (editingTd) return; // already editing
            makeTdEditable(target)    
    }
};

//Event
function finishTdEdit(target, td){
    //console.log(td, target)
    if(target){
        td.innerHTML = td.firstChild.value
    }else{
        td.innerHTML = editingTd.data 
    }
    td.classList.remove('edit-td');
    editingTd = null;
}

//Event Handler:currently the real event target is the td
function makeTdEditable(td){
    //let td = event.target
    
    editingTd = {
        elem: td,
        data: td.innerHTML
    };
    //td is in edit state, CSS also styles the area inside
    td.classList.add('edit-td')
    let textArea = document.createElement('textarea')

    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';
    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea)
    textArea.focus();

    td.insertAdjacentHTML('beforeEnd', '<div class="edit-controls"><button class="edit-ok">OK</cancel><button  class="edit-cancel">Cancel</button></div>');

}

