/////////////////////////////////////////////////////////////
/*Editable Div*/
/////////////////////////////////////////////////////////////
const view = document.querySelector('.view')
let area = null;
view.style = `border: 3px solid black;
              height: 200px;
              width: 500px`
view.addEventListener('click', function(){
    area=document.createElement('textarea');
    area.className = 'edit';
    area.style = `border: 3px solid blue;
                  height: 200px;
                  width: 500px`
    area.value = view.innerHTML;

    // area.onkeydown = function(event) {
    //     if (event.key == 'Enter' || event.key == 'Escape') {
    //       this.blur();
    //     }
    //   };

      area.onblur = function() {
        editEnd();
      };

    area.addEventListener('keydown',function(event){
        if (event.key == 'Enter' || event.key == 'Escape'|| event.key == 'Shift') {
            this.blur();
        }
    });

    // area.addEventListener('blur',function() {
    //     editEnd();
    // });

    view.replaceWith(area);
    area.focus();
})

function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
  }


/////////////////////////////////////////////////////////////
/*on Focus*/
/////////////////////////////////////////////////////////////


const btn = document.querySelectorAll('.btn')
const inpt = document.querySelector('input')
const p = document.querySelector('.status')
p.style = 'border-bottom: 1px solid black;';
for (button of btn){
    button.addEventListener('click', function(event){
        console.log(btn.id)
        if(event.target.id == 'focus'){
            inpt.focus()
            event.target.classList.add('disabled')
            document.getElementById('blur').classList.remove('disabled')
            //btn[1].classList.remove('disabled')
            p.innerHTML = 'onFocus'
        }else if(event.target.id == 'blur'){
            inpt.blur()
            event.target.classList.add('disabled')
            document.getElementById('focus').classList.remove('disabled')
            p.innerHTML = 'onBlur'
        
        }
    })
}