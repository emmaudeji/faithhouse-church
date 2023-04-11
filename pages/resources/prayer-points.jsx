import { useState } from "react";
import ResourcesHeader from "@/component/ResourcesPage/ResourcesHeader";
import NotAvailable from "@/component/NotAvailable";
import { useRouter } from "next/router";




const PrayerPoints = () => {
  const path = useRouter().pathname.split('/');
  return (
    <>
      <ResourcesHeader path={path}
      />

    <NotAvailable text='Resources not available'/>

      <div className="section-container cursor-pointer text-zinc-400 hover:text-zinc-900">
        <p onClick={() => window.scrollTo({top: 0, left: 0, behaviour: 'smooth'})}>Read more resources</p>
      </div>
    </>
  );
};

export default PrayerPoints;
