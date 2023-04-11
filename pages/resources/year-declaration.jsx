import { useState } from "react";
import ResourcesHeader from "@/component/ResourcesPage/ResourcesHeader";
import { useRouter } from "next/router";


const YearDeclaration = () => {
  const path = useRouter().pathname.split('/');
  
  return (
    <>
      <ResourcesHeader path={path}
      />


      <div className="py-14">
        <div className="heading">

        </div>
        <div className="scriptures">

        </div>
        <div className="manthra">

        </div>
      </div>
      <div className="content">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p className="sign">

        </p>
      </div>
      <div className="section-container cursor-pointer text-zinc-400 hover:text-zinc-900">
        <p onClick={() => window.scrollTo({top: 0, left: 0, behaviour: 'smooth'})}>Read more resources</p>
      </div>
    </>
  );
};

export default YearDeclaration;
