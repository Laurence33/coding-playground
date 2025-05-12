import { createContext, useCallback, useState } from 'react';
import { deleteBook, getBooks, postBook, updateBook } from '../services/booksApi';

export const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(() => getBooks().then(data => setBooks(data)), []);

  const createBook = async (title) => {
    const data = await postBook({ title });
    setBooks(prev => {
      return [
        ...prev,
        data
      ]
    })
  };

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

  const deleteBookById = async (id) => {
    await deleteBook(id);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  }

  const contextValue = {
    books,
    fetchBooks,
    setBooks,
    createBook,
    updateBookById,
    deleteBookById
  }

  return <BooksContext.Provider value={contextValue}>
    {children}
  </BooksContext.Provider>
}

export default Provider;