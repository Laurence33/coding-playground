import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const { data } = await axios.get(`${API_URL}/books`);
      setBooks(data);
    }
    getBooks();
  }, []);

  const updateBookById = async (id, newTitle) => {
    const { data } = await axios.put(`${API_URL}/books/${id}`, {
      title: newTitle
    });

    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return data;
      }
      return book
    })
    setBooks(updatedBooks)
  }
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
    <BookList books={books} onUpdate={updateBookById} onDelete={deleteBookById} />
    <BookCreate onCreate={createBook} />
  </div>
}