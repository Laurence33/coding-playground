import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { BooksContext } from './context/BooksContext';
import { getBooks } from './services/booksApi';

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const { books, setBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, [setBooks]);


  const deleteBookById = async (id) => {
    await axios.delete(`${API_URL}/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  }

  const createBook = async (title) => {
    const { data } = await axios.post(`${API_URL}/books`, { title });

    setBooks(prev => {
      return [
        ...prev,
        data
      ]
    })
  };
  return <div className="app">
    <h1>Reading List</h1>
    <BookList books={books} onDelete={deleteBookById} />
    <BookCreate onCreate={createBook} />
  </div>
}