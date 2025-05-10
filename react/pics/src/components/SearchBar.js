import './SearchBar.css';
import { useState } from 'react';
function SearchBar({ onSubmit }) {
  const [formData, setFormData] = useState({ search: '' })

  const handleFormChange = (event) => {
    setFormData(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData.search);
  }

  return <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="search-input">Enter Search Term</label>
      <input
        id="search-input"
        name="search"
        value={formData.search}
        onChange={handleFormChange}
      ></input>
    </form>
  </div >;
}

export default SearchBar;
