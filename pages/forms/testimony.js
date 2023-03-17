import React from "react";
import PageHeroBanner from "@/component/PageHeroBanner";
const testimony = () => {
  return (
    <>
      <PageHeroBanner
        pageTitle="testimony form >"
        heading="Share your testimony"
        image={"/testimony.jpg"}
      />
      <div
        id="feedback"
        className="h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center"
      >
        Updating content
      </div>
    </>
  );
};

export default testimony;
