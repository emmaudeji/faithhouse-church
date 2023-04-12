import React from 'react'
import { urlFor } from "@/lib/client";
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io"

const SectionCard = ({testimonies, handleDropdown, activeContent}) => {
  return (
    <div>
      { testimonies?.map(({testifierImage, title,  highlight, _id, testifier, testimony}) => {
              return (
                <div id={_id} key={_id} className="border-b border-zinc-300">
                    
                    <div onClick={() => handleDropdown(_id)}
                      className="w-full flex flex-col sm:flex-row gap-4 sm:items-center py-4 ">

                      <div>
                        <div className="w-36 h-36 overflow-hidden">
                          <img src={testifierImage && urlFor(testifierImage)} alt="" 
                          className="h-full w-full object-cover"/>
                        </div>
                      </div>

                      <div className="flex-1 content">
                        <div className="grid gap-2 w-full">
                          <h3 className="font-bold text-xl">{title ? title : "God's goodness and mercy is forever"}</h3>
                          <p>{testifier ? testifier : "Anonymous"}</p>
                          <p>{highlight ? highlight : "For He sent His word and it delivered me and set me upon my feet. Now I can achieve more because God empowered me to do so."}</p>
                          <div >
                            {!activeContent && <button className="text-zinc-500 onHover">Read all</button>}
                          </div>
                        </div>

                        <div onClick={() => handleDropdown(_id)} className="hover:text-3xl duration-300 text-2xl">
                          {activeContent !== _id ? <IoIosArrowDropdown/>: <IoIosArrowDropup/>}
                        </div>
                      </div>
                    </div>

                    {activeContent === _id && 
                    <div className="py-6">
                      {
                        testimony.map(({children}, i) => {
                          const text = children[0].text
                          return(<p className="pt-2" key={i}>{text}</p>)
                        })
                      }
                    </div>
                    }
                </div>
              )
                
             })
              
             }
    </div>
  )
}

export default SectionCard