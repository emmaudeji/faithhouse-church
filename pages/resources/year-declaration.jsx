import { useState, useEffect } from "react";
import ResourcesHeader from "@/component/ResourcesPage/ResourcesHeader";
import { months } from "@/Data/months";
import { client, urlFor } from "@/lib/client";
import { useRouter } from "next/router";


const YearDeclaration = ({YearData, fetchError}) => {

  fetchError.length && console.log(fetchError)

  const path = useRouter().pathname.split('/');

  const yearList = YearData?.map((item) => new Date(item.year).getFullYear())

  // refactoring
   const [activeYear , setActiveYear] = useState(new Date().getFullYear())
   const [dynamicData, setDynamicData] = useState([])
  //  const [staticData, setStaticData] = useState([])
  
  
  // checks that resources is available before rendering
   const handleClick = (year) => {
    setActiveYear(year)
    const filtered = YearData?.filter(item => new Date(item.year).getFullYear() === year)
    setDynamicData(filtered)
   }
   
   useEffect(() => {
     handleClick(activeYear)
   }, [activeYear])
   

   console.log( 'YearData',  YearData, 'yearList' , yearList, activeYear, dynamicData)
  return (

    <>
       <ResourcesHeader path={path} />
       {/* year navbar */}
       <div className="section-padding ">
        <div className="flex border-b border-zinc-300 w-full overflow-auto scrollbar-hidden">
          {
            yearList?.map((item, i) => {
              return (
                <div key={i} onClick={() => setActiveYear(item)}>
                  <p className={`${  item === activeYear ? 'bg-zinc-300' : null }  py-3 px-6 border-r border-zinc-300 onHover cursor-pointer`}>{item}</p>
                </div>
              )
            })
          }
        </div>
       </div>
      
      {/* content display */}
       <div className="section-padding ">
        {
          dynamicData?.map(({yearFocusImage, content, _id , yearlyTheme, yearlyScriptures, manthra}) => {
            return (
              <div key={_id} id={activeYear} className="py-14 grid gap-6">
                {/* heading */}
                <div className={` ${yearFocusImage ? "w-full sm:w-[500px] h-60 overflow-hidden" : null} `}>
                  <img src={urlFor(yearFocusImage)} alt="year focus" className="object-cover h-full w-full"/>
                </div>
                
                <div className="heading grid gap-2 pb-6" >
                      <div className="text-2xl font-bold text-zinc-500">
                        {yearlyTheme}
                      </div>
                      <div className="text-lg font-semibold grid gap-1">
                        {
                          manthra?.map((item, i) => {
                            return (
                              <p key={i} className="flex gap-3 items-center"> <span className="w-3 h-3  bg-zinc-500">{' '}</span> {item}</p>
                            )
                          })
                        }
                      </div>
                      <div className="inline-block p-2 bg-yellow-400 text-sm ">
                          <h1  className="flex gap-3 ">
                            {
                              yearlyScriptures?.map((item, i) => (<p key={i}>{item}</p>))
                            }
                          </h1>
                      </div>
                    </div>

                {/* body */}
                <div className="content">
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
            
                  <div className="sign">
                    <p>Signed</p>
                    <p>{`Rev. Barr & Barr (Mrs.) Ikenna Emmanuel`}</p>
                    <p>Team Leaders</p>
                  </div>
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
  let YearData = []
  let fetchError = []

  try {
    const query = '*[_type == "yearlyFocus"]';
    YearData = await client.fetch(query);
  } catch (error) {
    fetchError.push({testimonySchema: JSON.stringify(error)})
  }

  return {
    props: { YearData, fetchError },
  };
};

export default YearDeclaration;





