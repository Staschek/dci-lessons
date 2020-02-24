//Book constructor
function Book(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

//UI Constructor
    function UI(){    }

//Add Book to List
    UI.prototype.addBookToList = function(book){
        const list = document.getElementById('book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>
        `
        list.appendChild(row)
    }

//Clear fields
    UI.prototype.clearFields = function(){
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }

//delete Book
    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete'){
            //target.parentElement.parentElement.remove();
            target.closest('tr').remove();  //alternative

        }
    }

// Give Validation feedback
    UI.prototype.showAlert = function(message, className){
        //Create a Div
        let div =  document.createElement('div')
        //Add className
        div.className = `alert ${className}`
        //Add Text
        div.innerHTML = message
        console.log(div)
        //Append 
        //Get Parent
        //Insert the added Div
        document.getElementById('book-form').insertAdjacentElement('beforebegin', div)
        setTimeout(() => {div.remove();},2 * 1000);    
    }

//Event Listener
    //Event Listener for add book
    document.getElementById('book-form').addEventListener('submit', function(e){
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const isbn = document.getElementById('isbn').value
        //Instantiate book
        const book = new Book(title, author, isbn);
        
        //Instantiate UI
        const ui = new UI();

    // Validation
        if(title === '' ||  author === '' || isbn === ''){
        //Show Error feed Back
        ui.showAlert('Please fill in all the fields', 'error')
        }else{
            //    Add Book to List & Clear Fields
                ui.addBookToList(book)
                ui.clearFields()
            //    Show Success feed Back
                ui.showAlert('The Book Added Successfully', 'success')

            }
        e.preventDefault();
    })

    //Event Listener for add book
    document.getElementById('book-list').addEventListener('click', function(e){
        const ui = new UI();
        ui.deleteBook(e.target)
        ui.showAlert('The Book has been removed successfully', 'success')


        e.preventDefault();
    })
