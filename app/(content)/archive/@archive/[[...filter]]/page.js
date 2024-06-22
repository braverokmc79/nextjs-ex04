import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/newsDB";
import Link from "next/link";
import React, { Suspense } from "react";

//헤더
async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  const availableMonth = getAvailableNewsMonths(year);

  if (year && !month) {
    links = availableMonth;
  }

  if (year && month) {
    links = [];
  }

  
  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonth.includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            let href = year
              ? `/archive/${year}/${link}`
              : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}


//필터 뉴스
async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newContent = <p>No news found for the selected preriod.</p>;

  if (news && news.length > 0) {
    newContent = <NewsList news={news} />;
  }

  return newContent;
}


//본체
const FilteredNewsPage = async ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      {/* <Suspense fallback={<p> 😶‍🌫️😶‍🌫️😶‍🌫️😶로딩 ...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense> */}
      <Suspense fallback={<p>🎈🎈🎈 fallback 로딩 news...</p>}>   
        <FilterHeader year={selectedYear} month={selectedMonth} />    
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
