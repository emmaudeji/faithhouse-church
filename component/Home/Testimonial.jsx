import { useState } from "react";
import OutlineButtonBlack from "../buttons/OutlineButtonBlack";
import Link from "next/link";
import TestimonyCard from "../cards/TestimonyCard";
import { testimonies } from "@/Data/testimonies";
import { client } from "@/lib/client";

const Testimonial = ({testimonyList}) => {
  // const reduceList = testimonyList?.slice(0,5)
  const [testimonials, setTestimonials] = useState(testimonyList)

  console.log( testimonials, testimonies, testimonyList)

  return (
    <div className="w-full flex px-6 sm:px-16 lg:px-36 flex-col py-24 bg-yellow-500">
      {/* heading */}
      <div className="mb-8">
        <div className="border-b-4 border-yellow-300 text-yellow-300 text-2xl mb-2 flex flex-col sm:flex-row">
        <h3 className="pr-2">Testimonies of</h3>
        <h3 className="font-bold">Transformed Lives</h3>
      </div>
      <p>Their testimonies are proofs of God's power</p>
      </div>

      {/* slider */}
      <div className="overflow-auto scrollbar-hidden pb-2">
        <div className="flex gap-6 ">
          {
            testimonials ? testimonials.map(({title, highlight, _id, testifier,}) => {
              return (
                <div key={_id}>
                  <TestimonyCard
                    name= {testifier} testimony={highlight} link={_id} title={title}
                  />
                </div>
              )
            }) : 
            testimonies.map(({ testimony, id, name,}) => {
              return (
                <div key={id}>
                  <TestimonyCard
                    name= {name} testimony={testimony} 
                  />
                </div>
              )
            })
          }          
        </div>
      </div>

      {/* Action buttons */}
      <div className="btn flex justify-center pt-14">
        <div className="flex gap-4">
          <div>
            <OutlineButtonBlack>
              <Link href='./testimonies'>
              View Testimonies</Link>
            </OutlineButtonBlack>
          </div>
          <div>
             <OutlineButtonBlack>
              <Link href='./forms/testimony'>
             Share Testimony</Link>
            </OutlineButtonBlack>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "testimonySchema"]';
  const testimonyList = await client.fetch(query);

  return {
    props: { testimonyList },
  };
};



export default Testimonial