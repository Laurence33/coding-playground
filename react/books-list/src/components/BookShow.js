import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import { BooksContext } from '../context/BooksContext';

export default function BookShow({ book, onDelete }) {
  const { updateBookById } = useContext(BooksContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleUpdate = (id, title) => {
    updateBookById(id, title);
    setShowEdit(false);
  }


  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onUpdate={handleUpdate} />
  }
  return <div className="book-show">
    <img alt="books"
      src={`https://picsum.photos/seed/${book.id}/300/200`}
    />
    {content}
    <div className="actions">
      <button className='edit' onClick={handleEditClick}>Edit</button>
      <button className="delete" onClick={() => onDelete(book.id)}>x</button>
    </div>
  </div>
}