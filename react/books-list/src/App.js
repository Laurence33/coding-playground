import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { getBooks } from './services/booksApi';
import useBooksContext from './hooks/useBooksContext';

export default function App() {
  const { setBooks } = useBooksContext();

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, [setBooks]);

  return <div className="app">
    <h1>Reading List</h1>
    <BookList />
    <BookCreate />
  </div>
}