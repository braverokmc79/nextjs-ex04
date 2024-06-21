import React from "react";
import { DUMMY_NEWS } from "../../dummy-news";
import { notFound } from "next/navigation";

const InterceptedImagePage = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <h2>InterceptedImagePage</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
};

export default InterceptedImagePage;
