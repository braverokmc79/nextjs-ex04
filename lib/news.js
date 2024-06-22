import sql from 'better-sqlite3';

import { DUMMY_NEWS } from "@/dummy-news";

const db=sql('data.db');


// 모든 뉴스 데이터를 반환하는 함수
export async function getAllNews() {
  const news=db.prepare('SELECT * FROM `news` ').all();
 
 
  await new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve();
    }, 3000);
    
  });

  
  /** 
  try{
    const response = await fetch("http://localhost:8080/news");
    if (!response.ok) {
      throw new Error("데이터를 가져오는데 실패 했습니다.");
    }

   return await response.json();

  }catch(err){
    throw new Error("데이터를 가져오는데 실패 했습니다.2"); 
  }
  */

}
  

// 최신 뉴스 3개를 반환하는 함수
export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

// 뉴스 데이터에서 사용 가능한 연도를 추출하는 함수
export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    // 연도가 배열에 없으면 추가
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a); // 최신 연도부터 정렬
}

// 특정 연도에 사용 가능한 월을 추출하는 함수
export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    // 뉴스의 연도가 입력된 연도와 일치하는지 확인
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      // 월이 배열에 없으면 추가
      if (!months.includes(month)) {
        months.push(month + 1); // 월은 0부터 시작하므로 1을 더함
      }
    }
    return months;
  }, []).sort((a, b) => b - a); // 최신 월부터 정렬
}

// 특정 연도에 해당하는 뉴스를 반환하는 함수
export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

// 특정 연도와 월에 해당하는 뉴스를 반환하는 함수
export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    // 뉴스의 연도와 월이 입력된 연도와 월과 일치하는지 확인
    return newsYear === +year && newsMonth === +month;
  });
}
