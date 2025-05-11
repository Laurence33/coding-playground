import { createContext, useState } from 'react';
import { updateBook } from '../services/booksApi';

export const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const updateBookById = async (id, newTitle) => {
    const data = await updateBook(id, newTitle);

    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return data;
      }
      return book
    })
    setBooks(updatedBooks)
  }

  const contextValue = {
    books,
    setBooks,
    updateBookById
  }

  return <BooksContext.Provider value={contextValue}>
    {children}
  </BooksContext.Provider>
}

export default Provider;