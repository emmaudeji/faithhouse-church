import React from "react";
import PageHeroBanner from "@/component/PageHeroBanner";

const index = () => {
  return (
    <>
      <PageHeroBanner
        pageTitle="Sermon >"
        heading="Get inspired by th word of faith and transformation"
        image={"/when-men-worship.jpg"}
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

export default index;
