import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";
import React from "react";

const FilteredNewsPage = ({ params }) => {
  const filter = params.filter;
  const links = getAvailableNewsYears();
  const news = getNewsForYear(filter[0]);

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}          
        </ul>
      </nav>
      
      <NewsList news={news}   />
    </header>
  );
};

export default FilteredNewsPage;
