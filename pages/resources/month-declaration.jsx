import { useState, useEffect } from "react";
import ResourcesHeader from "@/component/ResourcesPage/ResourcesHeader";
import { monthDeclaration } from "@/Data/monthDeclaration";
import { months } from "@/Data/months";
import { client, urlFor } from "@/lib/client";
import { useRouter } from "next/router";


const MonthDeclaration = ({monthlyFocus, fetchError}) => {
  fetchError.length && console.log(fetchError)

  const path = useRouter().pathname.split('/');

  // refactoring

   const [index, setIndex] = useState(2)
   const [available, setAvailable] = useState(true);
   const [activeMonth, setActiveMonth] = useState(new Date().getMonth())
   const [dynamicData, setDynamicData] = useState([])

  //  on page mount
  useEffect(() => {
    const filtered = monthlyFocus?.filter(item => new Date(item.monthYear).getMonth() === new Date().getMonth())
    setDynamicData(filtered)
  }, [])
  
  
  // checks that resources is available before rendering
   const handleClick = (id) => {
     setActiveMonth(id-1)
     const filtered = monthlyFocus?.filter(item => new Date(item.monthYear).getMonth() === id - 1)
    
     
     if ( filtered.length || monthDeclaration[id-1] ) {
      setAvailable(true)
      setIndex(id-1)
      setDynamicData(filtered)
    } else {
        setAvailable(false)
        setDynamicData([])
      }

      console.log('--------',filtered, )
   }
  

  //  const {id, theme, emphasis, scriptures, month, year, p1, p2, p3, p4, sign } = monthDeclaration[index]
   console.log( 'r' , available, 'monthlyFocus',  monthlyFocus, 'dynamicData', dynamicData, 'static', )
  return (
    <>
      <ResourcesHeader path={path}/>

      {/* months bar */}
      <div className="months px-6 sm:px-16 lg:px-35 flex py-2 overflow-auto scrollbar-hidden">
        {
          months?.map(({id, month}, i) => {
            return (
              <div key={id} 
              onClick = {() => handleClick(id)}
              className={` px-2  w-48 h-full text-center cursor-pointer hover:bg-zinc-300 duration-500 ${(activeMonth === i) ? 'bg-zinc-300 ' : null} `}>
                {month}
              </div>
            )
          })
        }
      </div>


        
      {/* resource available */}
       {available ? 
       
        (
          // if fetched dynamic data is available
             monthlyFocus?.length ? (
              // console.log(monthlyFocus[index - 1])
              dynamicData?.map(({_id, emphasis, monthYear, monthlyContent, 
                monthlyFocusImage, monthlyScriptures, theme, }) => {

                return (
                  <div key={_id} 
                  className="data section-padding py-14 grid gap-6"
                  >
                    <div className={` ${monthlyFocusImage ? "w-full sm:w-[500px] h-60 overflow-hidden" : null} `}>
                      <img className="object-cover"  src={urlFor(monthlyFocusImage)} alt="month-img" />
                    </div>
                    <div className="heading pb-6" >
                      <div className="text-2xl font-bold text-zinc-500">
                      {months[new Date(monthYear).getMonth()].month + ' ' + new Date(monthYear).getFullYear()}
                      </div>
                      <div className="text-2xl font-bold theme">
                        {theme}
                      </div>
                      <div className="empasis text-xl pb-2">
                        {emphasis}
                      </div>
                      <div className="inline-block p-2 bg-yellow-400 text-sm ">
                          <h1>{monthlyScriptures}</h1>
                      </div>
                    </div>

                    <div>
                      {monthlyContent?.map(({children}) => {
                        const {_key, text} = children[0]
                        return (
                          <div key={_key} className="s">
                            <p>{text}</p>
                          </div>
                        )
                      })}
                    </div>


                    
                  </div>
                )
              })
              )
             : 
          // if dynamic data is not available, render static data 
             (
              monthDeclaration[index]?.map(({id, theme, emphasis, scriptures, month, year, p1, p2, p3, p4, sign }) => {
                <div key={id} className="py-14 px-6 sm:px-16 lg:px-36 grid gap-6">
                <div className="heading">
                  <div className="text-2xl font-bold text-zinc-500">
                  {month + ' ' + year}
                  </div>
                  <div className="text-2xl font-bold theme">
                    {theme}
                  </div>
                  <div className="empasis text-xl ">
                    {emphasis}
                  </div>
                  <div className="inline-block p-2 bg-yellow-400 text-sm ">
                      <h1>{scriptures}</h1>
                  </div>
                </div>

                <div className="content grid gap-6">
                  <p>{p1}</p>
                  <p>{p2} </p>
                  <p>{p3} </p>
                  <p>{p4} </p>
                  <p className="sign">
                    <p>Signed by:</p>
                    {sign}
                  </p>
                </div>
              </div>

              })
             
             )

        )
        : 
        // no resource available
        <div className="text-xl text-zinc-300 font-bold py-14 px-6 
        sm:px-16 lg:px-36 h-56 flex justify-center w-full 
        items-center"> 
          Resources not available 
        </div>
      }
      <div className="section-container cursor-pointer text-zinc-400 hover:text-zinc-900 flex">
        <p onClick={() => window.scrollTo({top: 0, left: 0, behaviour: 'smooth'})}>Read more reources</p>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  let monthlyFocus = []
  let fetchError = []

  try {
    const query = '*[_type == "monthlyFocus"]';
    monthlyFocus = await client.fetch(query);
  } catch (error) {
    fetchError.push({testimonySchema: JSON.stringify(error)})
  }

  return {
    props: { monthlyFocus, fetchError },
  };
};

export default MonthDeclaration;
