import React from 'react';

export const BTable = ({ books, deleteRow }) => {
  const booksTable = Array.from(books);
  const bookList = booksTable.map((book, i) => {
    const { title = title, author = author, isbn = isbn } = book;
    return (
      <tr key={i}>
        <td>{title}</td>
        <td>{author}</td>
        <td>{isbn}</td>
        <td>
          <a href='#' id={i} onClick={deleteRow}>
            <i className='fas fa-close'></i>{' '}
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table class='u-full-width'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th></th>
            <tbody id='book-list'>{this.booksList}</tbody>
          </tr>
        </thead>
      </table>
    </div>
  );
};
