import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import './App.css';
import { BForm } from './components/BForm/BForm';
import { BTable } from './components/BTable/BTable';

class App extends Component {
  state = {
    books: [],
    alertType: '',
    showAlert: false
    // ausgabe: 1,
    // verlag: '',
    // length: ''
  };

  letBooks = e => {
    e.preventDefault();
    const book = {
      title: e.target.title.value,
      author: e.target.author.value,
      isbn: e.target.isbn.value
    };

    // Validation
    if (book.title === '' || book.author === '' || book.isbn === '') {
      //    Show Error feed Back
      this.showAlert('Please fill in all the fields', 'error');
    } else {
      //    Add Book to localStorage and ...
      this.addBook(book);
      //    Show Success Feedback
      this.showAlert('The Book Added Successfully', 'success');
    }
  };

  deleteRow = e => {
    this.deleteBook(e.target);

    e.preventDefault();
  };

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate() {
    this.setLocalStorage();
  }

  addBook = book => {
    let books = this.state.books;
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    //    Add Book to List & Clear Fields
    this.clearFields();
  };

  clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  };

  deleteBook = target => {
    if (target.className === 'delete') {
      //target.parentElement.parentElement.remove();
      target.closest('tr').remove(); //alternative
      //    Show Success Feedback
      this.showAlert('The Book has been removed successfully', 'success');
      this.removeBook(target.parentElement.previousElementSibling.textContent);
    }
  };

  getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    this.setState({ books });
  };

  removeBook = isbn => {
    let books = this.state.books;
    books.forEach((book_, index) => {
      if (book_.isbn === isbn) {
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
      }
      return books;
    });
    // console.log(isbn)
    // console.log(books)
  };

  setLocalStorage = () => {
    localStorage.setItem('books', JSON.stringify(this.state.books));
  };

  showAlert = (message, className) => {
    //Create a Div
    let div = document.createElement('div');
    //Add className
    div.className = `alert ${className}`;
    //Add Text
    div.innerHTML = message;
    //console.log(div)
    //Append
    //Get Parent
    //Insert the added Div
    document.querySelector('.main').insertAdjacentElement('afterbegin', div);
    setTimeout(() => {
      div.remove();
    }, 2 * 1000);
  };

  render() {
    return (
      <>
        <div className='container'>
          <div className='navbar'>
            <Link to='/addBook'>
              {' '}
              <h3 className='display-4'>Add Book</h3>{' '}
            </Link>
            <Link to='/BList'>
              {' '}
              <h3 className='display-4'>Book List</h3>{' '}
            </Link>
          </div>

          <div className='main'>
            <Switch>
              <Route
                path='/addBook'
                render={props => <BForm letBooks={this.letBooks} />}
              />
              <Route
                path='/BList'
                render={props => <BTable books={this.state.books} />}
              />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default App;
