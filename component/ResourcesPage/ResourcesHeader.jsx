import {useState} from "react";
import PageHeroBanner from "../PageHeroBanner";
import { resouces } from "@/Data/resources";
import Link from "next/link";

const ResourcesHeader = ({active, setActive}) => {
  
  return (
    <>
      <PageHeroBanner
        pageTitle="Resurces >"
        heading="Inspirationals and resouces for your personal growth"
        image={"/executive-lady.jpg"}
      />
      
        <div className="flex px-6 sm:px-16 lg:px-36 pt-10 overflow-auto gap-0 scrollbar-hidden capitalize w-full border-b-2 border-zinc-300">
        {
          resouces?.map(({label, id, link}, i) => {
            return (
              <div key={id}>
                <div  
                  onClick={() => setActive(label)}
                  className={` py-4 px-2  flex justify-center items-center w-48 h-full text-center cursor-pointer ${(resouces.length - 1) !== i ? ' border-r-2' : '' }  hover:bg-zinc-300 duration-500 ${(active === label) ? 'bg-zinc-300 ' : null} ` }>
                    <Link href={link}>{label}</Link>
                </div>
              </div>
              
              
            )
          })
        }
      </div>
    
     
      
    </>
  );
};

export default ResourcesHeader;
