import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";



const LastestDefaultPage = () => {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>LastestDefaultPage</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LastestDefaultPage;
