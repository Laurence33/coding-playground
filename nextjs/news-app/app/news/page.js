import Link from "next/link";

export default function NewsPage() {
  const newsArr = ['news-1', 'news-2', 'news-3'];
  return <>
    <div>
      <ul>
        {newsArr.map((el, index) => (
          <li key={index}><Link href={`/news/${el}`}>{el}</Link></li>
        ))}
      </ul>
    </div>
  </>
}