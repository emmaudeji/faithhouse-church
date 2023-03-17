import React from "react";
import PageHeroBanner from "@/component/PageHeroBanner";

const index = () => {
  return (
    <>
      <PageHeroBanner
        pageTitle="sermon >"
        heading="Audio messages to inspire your daily victory"
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
