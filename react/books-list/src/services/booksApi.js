import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function getBooks() {
  const { data } = await axios.get(`${API_URL}/books`);
  return data;
}

export async function updateBook(id, title) {
  const { data } = await axios.put(`${API_URL}/books/${id}`, {
    title
  });
  return data;
}