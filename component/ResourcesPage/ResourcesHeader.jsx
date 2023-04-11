import {useState} from "react";
import PageHeroBanner from "../PageHeroBanner";
import { resources } from "@/Data/resources";
import Link from "next/link";

const ResourcesHeader = ({path}) => {
//  const [active, setActive] = useState('')
  
  return (
    <>
      <PageHeroBanner
        pageTitle="Resurces >"
        heading="Inspirationals and resouces for your personal growth"
        image={"/executive-lady.jpg"}
      />
      
        <div className="flex px-6 sm:px-16 lg:px-36 pt-10 overflow-auto gap-0 scrollbar-hidden capitalize w-full border-b-2 border-zinc-300">
        {
          resources?.map(({label, id, link}, i) => {
            return (
                <Link href={`/resources/${link}`} key={id} 
                  className={` py-4 px-2  flex justify-center items-center w-48 h-full text-center cursor-pointer ${(resources.length - 1) !== i ? ' border-r-2' : '' }  hover:bg-zinc-300 duration-500 ${(link === path[2]) ? 'bg-zinc-300 ' : null} ` }>
                    {label}
                </Link>
            )
          })
        }
      </div>
    
     
      
    </>
  );
};

export default ResourcesHeader;
