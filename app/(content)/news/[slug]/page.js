
import React from 'react'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsItem } from '@/lib/newsDB';

const NewsDetailPage = async ({params}) => {
  const newsSlug =params.slug;
  console.log("newsSlug: ", newsSlug);
  const newsItem=await getNewsItem(newsSlug);
  
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