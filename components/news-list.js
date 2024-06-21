import Link from 'next/link';
import React from 'react'

const NewsList = ({news}) => {
  return (
    <ul className='news-list'>
        {news.map((newsItem) => (
          <li><Link key={newsItem.id} href={`/news/${newsItem.id}`} >
             <img src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}   />              
            <span>{newsItem.title}</span>
          </Link></li>
        ))}
    </ul>
  )
}

export default NewsList;