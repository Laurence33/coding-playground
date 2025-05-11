import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export default function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  }

  const createBook = (title) => {
    setBooks(prev => {
      return [
        ...prev,
        {
          id: Math.round(Math.random() * 999),
          title
        }
      ]
    })
  };
  return <div className="app">
    <BookList books={books} onDelete={deleteBookById} />
    <BookCreate onCreate={createBook} />
  </div>
}