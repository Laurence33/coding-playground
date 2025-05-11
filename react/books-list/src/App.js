import { useState } from 'react';
import BookCreate from './components/BookCreate';

export default function App() {
  const [books, setBooks] = useState([]);

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
  return <div>
    <BookCreate onCreate={createBook} />
  </div>
}