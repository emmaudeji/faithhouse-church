import { useState } from "react";
import ResourcesHeader from "@/component/ResourcesPage/ResourcesHeader";
import { monthDeclaration } from "@/Data/monthDeclaration";
import { months } from "@/Data/months";

const MonthDeclaration = () => {
  // refactoring
   const [active, setActive] = useState('month Declaration')
   const [index, setIndex] = useState(2)
   const [available, setAvailable] = useState(true);
   const [activeMonth, setActiveMonth] = useState(2)
  
  // checks that resources is available before rendering
   const handleClick = (i) => {
     setActiveMonth(i)
    if (monthDeclaration[i]) {
      setAvailable(true)
      setIndex(i)
    } else {
        setAvailable(false)
      }
   }
  
   const {id, theme, emphasis, scriptures, month, year, p1, p2, p3, p4, sign } = monthDeclaration[index]

  return (
    <>
      <ResourcesHeader 
      setActive={setActive}
      active={active}/>

      {/* months bar */}
      <div className="months px-6 sm:px-16 lg:px-35 flex py-2 overflow-auto scrollbar-hidden">
        {
          months?.map((item, i) => {
            return (
              <div key={i} 
              onClick = {() => handleClick(i)}
              className={` px-2  w-48 h-full text-center cursor-pointer hover:bg-zinc-300 duration-500 ${(activeMonth === i) ? 'bg-zinc-300 ' : null} `}>
                {item.month}
              </div>
            )
          })
        }
      </div>

        {/* content */}
      {available ? <div className="py-14 px-6 sm:px-16 lg:px-36 grid gap-6">
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
      </div> : <div className="text-xl text-zinc-300 font-bold py-14 px-6 sm:px-16 lg:px-36 h-56 flex justify-center w-full first-letter:items-center"> Resources not available </div>
      }
      <div className="section-container cursor-pointer text-zinc-400 hover:text-zinc-900 flex">
        <p onClick={() => window.scrollTo({top: 0, left: 0, behaviour: 'smooth'})}>Read more reources</p>
      </div>
    </>
  );
};

export default MonthDeclaration;
