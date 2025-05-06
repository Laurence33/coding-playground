import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailsPage({ params }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug);
  return <>
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  </>
}