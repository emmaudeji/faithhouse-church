import React from 'react'

const SectionTitleBar = ({setActiveCategory, category, activeCategory, categoryList, }) => {
  return (
    <div className='section-padding'>
          <div className='flex gap-0 w-full items-center overflow-auto scrollbar-hidden'>
            <div onClick={() => setActiveCategory(category)} >
              <p className={`py-3 px-7 border-r border-zinc-200 onHover ${activeCategory === category ? 'bg-zinc-200': ''}`}>{category}</p>
            </div>
              { 
                categoryList?.map((item, i) => {
                  return (
                    <div key={i} onClick={() => setActiveCategory(item)} >
                       <p className={`py-3 px-7 border-r border-zinc-200 onHover ${activeCategory === item ? 'bg-zinc-200': ''}`}>
                        {item}
                      </p>
                    </div>
                  )
                })
                }
          </div>
       </div>
  )
}

export default SectionTitleBar