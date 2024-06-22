import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/newsDB";
import Link from "next/link";
import React from "react";

const FilteredNewsPage = async ({ params }) => {
  const filter = params.filter;

  const selectedYear=filter?.[0];
  const selectedMonth=filter?.[1];

  let news;
  let links = await getAvailableNewsYears();
  if(selectedYear&& !selectedMonth){
    news= await getNewsForYear(selectedYear);
    links= getAvailableNewsMonths(selectedYear);
  }


  if(selectedYear&&selectedMonth){
    news=await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links=[];
  }

  let newContent=<p>No news found for the selected preriod.</p>

  if(news && news.length>0){
    newContent=<NewsList news={news}   />
  }

  const availableYears=await getAvailableNewsYears();
  
  if(
      (selectedYear && !availableYears.includes(selectedYear) )
      ||(selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))){
    throw new Error("Invalid filter.");
  }
  

  return (
    <header id="archive-header">
      <nav>
        <ul>
        
          {links.map((link) => {
            
            let href= selectedYear?
            `/archive/${selectedYear}/${link}` :
             `/archive/${link}` ;             

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            )


          })}          
        </ul>
      </nav>
      
     {newContent}


    </header>
  );
};

export default FilteredNewsPage;
