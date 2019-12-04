const tbl = document.querySelectorAll('td')
// let arr = Array.from(tbl)
//let arr = tbl.closest('td')

for(elem of tbl){
    //console.log(elem)
    elem.addEventListener('dblclick', enter)

}

function  enter(e){
    let x = e.target.innerHTML
    let td = e.target
    let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';
   // textArea.value = x;
    
    //console.log(td.lastChild)

    if(td.lastChild){
        if(!td.lastChild.className){
            td.innerHTML= '';
            td.appendChild(textArea);
            td.firstChild.innerHTML = x;
            td.insertAdjacentHTML('beforeEnd', '<div class="edit-controls"><input type="button" value="OK" class="edit-ok"><input type="button" value="Cancel" class="edit-error"></div>');
        }
        td.removeEventListener('dblclick',e)
        td.lastChild.firstChild.addEventListener('click',ok)
        td.lastChild.lastChild.addEventListener('click',cancel)
        function ok(e){
            td.innerHTML = e.target.parentElement.parentElement.firstChild.value
        }
        function cancel(){
            td.innerHTML = x
        }
    }
}