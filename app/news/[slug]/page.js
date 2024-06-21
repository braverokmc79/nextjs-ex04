
import React from 'react'
import { DUMMY_NEWS } from '../dummy-news';

const NewsDetailPage = ({params}) => {
  const newsSlug =params.slug;
  console.log("newsSlug: ", newsSlug);
  const newsItem=DUMMY_NEWS.find((newsItem)=>newsItem.id===newsSlug);

  return (
    <article className='news-article'>
        <header>
          <img src={`/images/news/${newsItem.image}`}  alt={newsItem.title} />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
       
        <p>News slug: {newsItem.content}</p>
    </article>
  )
}

export default NewsDetailPage