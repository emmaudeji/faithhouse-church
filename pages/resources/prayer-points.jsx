import { useState, useEffect } from "react";
import ResourcesHeader from "@/component/ResourcesPage/ResourcesHeader";
import { months } from "@/Data/months";
import { client, urlFor } from "@/lib/client";
import { useRouter } from "next/router";
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io"
import GenericPdfDownloader from "@/utils/pdfDownloader";


const PrayerPoints = ({PrayerPointsData, fetchError}) => {

  fetchError.length && console.log(fetchError)

  const path = useRouter().pathname.split('/');

  // refactoring
   const [active, setActive] = useState('')
   const [dynamicData, setDynamicData] = useState([])  
  
   useEffect(() => {
    setDynamicData(PrayerPointsData)
   }, [])
   
   const handleClick = (title) => {
    if(active === title) {
      setActive(null) 
    } else {
      setActive(title)
    }
   } 

   console.log( 'PrayerPointsData',  PrayerPointsData , 'dynamicData', dynamicData)
  return (

    <>
       <ResourcesHeader path={path} />

       <div className="section-padding py-14">

          {
            dynamicData && dynamicData.length && dynamicData?.map(({content, date, emphasis, 
              focus, prayerImage, title, _id}) => {
              return (
                <div key={_id} id={title} className="py-4 border-b border-zinc-300" >
                  <div className="pb-6 flex gap-4 flex-col sm:flex-row sm:items-center">

                    <div>
                      <div className={` ${prayerImage ? "w-full sm:w-48 h-48 overflow-hidden " : null} `}>
                        <img src={urlFor(prayerImage)} alt="year focus" 
                        className="h-full w-full object-cover hover:scale-105 duration-500 "/>
                      </div>
                    </div>


                    <div >
                      <div className="grid gap-1 pb-3">
                        <h3 className="font-bold text-xl">{title}</h3>
                        {focus && focus.length ? <p className="grid gap-1">
                          <p className="text-zinc-500">The prayer focus:</p>
                          {focus?.map((item, i) => (<p key={i} className="">{item}</p>))}
                        </p> : null}
                      </div>
                      <div className="flex gap-4 items-center">
                        <div onClick={() => handleClick(title)} className="hover:text-3xl duration-300 text-2xl">
                          {active !== title ? <IoIosArrowDropdown/>: <IoIosArrowDropup/>}
                        </div>
                        {active === title ? <div className="rounded-full py-2 px-4
                        bg-yellow-500 hover:bg-yellow-400 duration-300"> 
                        <GenericPdfDownloader rootElementId = {title} downloadFileName = {title}/> 
                        </div> : null } 
                        <div>{date}</div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="content">
                    { 
                     active === title ?
                     <div className="grid gap-4">

                      { emphasis && emphasis.length ? <p className="grid gap-1 pb-2 
                      border-b border-zinc-300">
                        <p className="text-zinc-500">This prayer emphasizes on:</p>
                        {emphasis?.map((item, i) => (<p key={i} className="">{item}</p>))}
                      </p> : null}

                      <p className="grid gap-2 pb-4">
                        {content?.map(({children}) => {
                              const {_key, text} = children[0]
                              return (
                                <div key={_key} className="s">
                                  <p>{text}</p>
                                </div>
                              )
                            })}
                        </p>

                      
                     </div>
                      

                      : null
                    }
                  </div>
                </div>
              )
            })
          }

       </div>

      
      <div className="section-container cursor-pointer text-zinc-400 hover:text-zinc-900">
        <p onClick={() => window.scrollTo({top: 0, left: 0, behaviour: 'smooth'})}>Read more resources</p>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  let PrayerPointsData = []
  let fetchError = []

  try {
    const query = '*[_type == "prayerPoints"]';
    PrayerPointsData = await client.fetch(query);
  } catch (error) {
    fetchError.push({testimonySchema: JSON.stringify(error)})
  }

  return {
    props: { PrayerPointsData, fetchError },
  };
};

export default PrayerPoints;

