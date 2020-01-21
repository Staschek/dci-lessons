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

//Event Listener
    //Event Listener for add book
    document.getElementById('book-form').addEventListener('submit', function(e){
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const isbn = document.getElementById('isbn').value
        const book = new Book(title, author, isbn);
        const ui = new UI();
        ui.addBookToList(book)
        ui.clearFields()

        e.preventDefault();
    })

    //Event Listener for add book
    document.getElementById('book-list').addEventListener('click', function(e){
        const ui = new UI();
        ui.deleteBook(e.target)

        e.preventDefault();
    })



    /////////////

    console.log('-------------------')


    var a = [1,2,3,4]

    // coping array with spread operator
    var b = [...a]
    console.log(a)
    console.log(b)
    b.push(5)
    console.log(a)
    console.log(b)

    function sum(a,b,c,d){
   return a+b+c+d
    }
    console.log(sum(...a))

    function arrayLength(...a){
        console.log(a)
        return 'the length of the array is ' + a.length
    }
    console.log(arrayLength(2,5,8,4,8,5,5,4))


    var e = [2,3,4]
    var [f,...rest] = e
    console.log(rest)