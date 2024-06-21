
import React from 'react'
import { DUMMY_NEWS } from '../dummy-news';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const NewsDetailPage = ({params}) => {
  const newsSlug =params.slug;
  console.log("newsSlug: ", newsSlug);
  const newsItem=DUMMY_NEWS.find((newsItem)=>newsItem.id===newsSlug);
  
  if(!newsItem){
    notFound();
  }

  return (
    <article className='news-article'>
        <header>
          
          <Link href={`/news/${newsItem.id}/image`} >
            <img src={`/images/news/${newsItem.image}`}  alt={newsItem.title} />
          </Link>

          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
       
        <p>News slug: {newsItem.content}</p>
    </article>
  )
}

export default NewsDetailPage