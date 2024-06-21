import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "./dummy-news";


const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li><Link key={newsItem.id} href={`/news/${newsItem.id}`} >
             <img src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}   />              
            <span>{newsItem.title}</span>
          </Link></li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
