import React from "react";
import PageHeroBanner from "@/component/PageHeroBanner";

const resources = () => {
  return (
    <>
      <PageHeroBanner
        pageTitle="Resurces >"
        heading="Inspirationals and resouces for your personal growth"
        image={"/executive-lady.jpg"}
      />
      <div className="h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center"></div>
    </>
  );
};

export default resources;
