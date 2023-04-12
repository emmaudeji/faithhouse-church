import React from "react";
import PageHeroBanner from "@/component/PageHeroBanner";

const index = () => {
  return (
    <>
      <PageHeroBanner
        pageTitle="Team >"
        heading="Our pastors are loving and sincere people"
        image={"/rev-ikenna-emmanuel-prayer.jpg"}
      />
      <div
        id="feedback"
        className="h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center"
      >
        updating content
      </div>
    </>
  );
};

export default index;
