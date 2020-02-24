
//UI Constructor
class UI{   
    constructor(item){
        this.list = item
    }
    //Add  List
    static addItemToList(list_){
            const list = document.getElementById('book-list')
            const row = document.createElement('tr')
            console.log(list_.list)
            row.innerHTML = `
            <td>${list_.list}</td>
            <td><a href='#' class='delete'>X</a></td>
            `
            list.appendChild(row)
        }

    //Clear fields
    static clearFields(){
        document.getElementById('title').value = ''
    }

            //delete Listitem
    static deleteItem(target){
        if(target.className === 'delete'){
            //target.parentElement.parentElement.remove();
            target.closest('tr').remove();  //alternative
            //    Show Success Feedback
    }}



    }
    document.getElementById('book-form').addEventListener('submit', function(e){
        const title = document.getElementById('title').value
       if(title){
           const list = new UI(title)
           UI.addItemToList(list)
           UI.clearFields()
           e.preventDefault();
        }
    })

    document.getElementById('book-list').addEventListener('click', function(e){
        UI.deleteItem(e.target)
        e.preventDefault();
    })
