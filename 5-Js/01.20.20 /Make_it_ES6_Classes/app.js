//Book constructor
class Book{
    constructor(title,author,isbn){

        this.title = title;
        this.author = author;
        this.isbn = isbn;
        }
    }

//UI Constructor
class UI{   
    //Add Book to List
    static addBookToList(book){
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
    static clearFields(){
            document.getElementById('title').value = ''
            document.getElementById('author').value = ''
            document.getElementById('isbn').value = ''
        }

    //delete Book
    static deleteBook(target){
            if(target.className === 'delete'){
                //target.parentElement.parentElement.remove();
                target.closest('tr').remove();  //alternative
                //    Show Success Feedback
                UI.showAlert('The Book has been removed successfully', 'success')
                Store.removeBook(target.parentElement.previousElementSibling.textContent)
        }

    }

// Give Validation feedback
    static showAlert(message, className){
        //Create a Div
        let div =  document.createElement('div')
        //Add className
        div.className = `alert ${className}`
        //Add Text
        div.innerHTML = message
        //console.log(div)
        //Append 
        //Get Parent
        //Insert the added Div
        document.getElementById('book-form').insertAdjacentElement('beforebegin', div)
        setTimeout(() => {div.remove();},2 * 1000);    
    }
}
//Local Storage Class
class Store{
    // repeat always
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
          } else {
            books = JSON.parse(localStorage.getItem('books'));
          }
        return books;
    }

    //Display Books to the UI
    static displayBooks(){
        let books = Store.getBooks();
       books.forEach(book_ => {
            UI.addBookToList(book_)
        });     
       // console.log(books)
    }
    
    //Add Book to the localStorage
    static addBook(book){
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        //    Add Book to List & Clear Fields
        UI.addBookToList(book)
        UI.clearFields()
    }

    //Remove Book to the localStorage
    static removeBook(isbn){
        let books = Store.getBooks();
        books.forEach((book_,index) => {
            if(book_.isbn === isbn){
                books.splice(index,1)
                localStorage.setItem('books', JSON.stringify(books));
            }
             return books
        });     
        // console.log(isbn)
        // console.log(books)


    }
}

//Event Listener
//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks)
    //Event Listener for add book
    document.getElementById('book-form').addEventListener('submit', function(e){
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const isbn = document.getElementById('isbn').value
        //Instantiate book
        const book = new Book(title, author, isbn);
        
        //Instantiate UI
        //const ui = new UI();       // siehe unter

    // Validation
        if(title === '' ||  author === '' || isbn === ''){
        //Show Error feed Back
        UI.showAlert('Please fill in all the fields', 'error')
        }else{
            //    Add Book to localStorage and ...
            Store.addBook(book)
            //    Show Success Feedback
            UI.showAlert('The Book Added Successfully', 'success')

            }
        e.preventDefault();
    })

    //Event Listener for add book
    document.getElementById('book-list').addEventListener('click', function(e){
        // const ui = new UI();    // siehe unter
     //   let isbnNr =  e.target.closest('td').previousSibling.previousSibling.textContent
    
        //    Remove Book to localStorage
        
       // console.log(isbnNr)
        UI.deleteBook(e.target)

        e.preventDefault();
    })



// localStorage.clear()

/*
    // Erklärung:
class User{
    static method(){
        return 'Hei'
    }
    method2(){
        return 'How'
    }
}
let user = new User
    console.log(user.method2())
    //Functioniert nicht, weil static
    // console.log(user.method())
    
    console.log(User.method())
    //Functioniert nicht, weil nicht static
    // console.log(User.method2())
*/
/*
   // Erklärung:
   class User{
    static method1(){
        console.log(this)
        return 'Hei'
    }
    method2(){
        console.log(this)
        return this.method1
    }
}
let u = new User
    console.log(u.method2())
    //Functioniert nicht, weil static
    // console.log(user.method())
    
    console.log(User.method1())
    //Functioniert nicht, weil nicht static
    // console.log(User.method2())
*/