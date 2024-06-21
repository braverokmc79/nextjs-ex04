import React from "react";

import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/app/news/dummy-news";

const ModalImagePage = ({ params }) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop"></div>        
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} className="width100"/>
        </div>
      </dialog>

    </>
  );
};

export default ModalImagePage;
