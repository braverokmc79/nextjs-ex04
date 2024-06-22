import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/newsDB";

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>NewsPage</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
