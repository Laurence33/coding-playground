import BookShow from './BookShow';
export default function BookList({ books }) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  })

  return <div className="book-list">
    {renderedBooks}
  </div>
}