export default function NewsDetailsPage({ params }) {
  const { id } = params;
  return <>
    <h2>News: {id}</h2>
  </>
}