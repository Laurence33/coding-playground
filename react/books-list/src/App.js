import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { BooksContext } from './context/BooksContext';
import { getBooks } from './services/booksApi';

export default function App() {
  const { setBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, [setBooks]);

  return <div className="app">
    <h1>Reading List</h1>
    <BookList />
    <BookCreate />
  </div>
}