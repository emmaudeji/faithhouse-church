import { useState, useEffect, useCallback } from "react";
import OutlineButtonBlack from "@/component/buttons/OutlineButtonBlack";
import PageHeroBanner from "@/component/PageHeroBanner";
import { client } from "@/lib/client";
import SectionTitleBar from "@/component/cards/SectionTitleBar";
import SectionCard from "@/component/cards/SectionCard";
import Link from "next/link";


const index = ({ testimonyList, fetchError }) => { 
  fetchError.length && console.log(fetchError)
  const categoryList = [ 'Healing', 'Business Breakthrough', 'Success', 'Deliverance', 'Transformation', 'Financial Favour']


  const [filteredTestimonies, setFilteredTestimonies] = useState()
  const [testimonies, setTestimonies] = useState(testimonyList)
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeContent, setActiveContent] = useState('')

  // get all categories from list\
    let list = []
    testimonies && testimonies.length && testimonies.map(item => {
      item.category.length && item.category.map(category => list.push({name: category}))
    })
    const categories = list && list.length && list.reduce((acc, curr) => {
      if(!acc.includes(curr.name)){acc.push(curr.name)}
      return acc
    }, []).sort()
    
 const filterTestimonies = () => {
    const result = testimonies?.filter(item => {
      return item.category.includes(activeCategory)
    })
    setFilteredTestimonies(result)
  }
  
  useEffect(() => {
    filterTestimonies()
  }, [activeCategory])
  
  console.log('testimonyList' , testimonies, 'activeCategory', activeCategory, 'list', list , 'newList', categories, 'filteredTestimonies', filteredTestimonies);

  const handleDropdown =  (_id) => {
      if(activeContent === _id) {
         setActiveContent(' ')
      } else {
         setActiveContent(_id)
      }
    }

  

  return (
    <>
      <PageHeroBanner
        pageTitle="Testimonies >"
        heading="Their testimonies are proves that God works miracles"
        image={"/testimony-woman.jpg"}
      />

      <div id="start" className='section-padding pt-16 pb-8'>
        <h3>Read the testimonies of transformed lives.</h3>
      </div>

      {/* Title bar */}
      <SectionTitleBar
        setActiveCategory={setActiveCategory} category={'All'} activeCategory={activeCategory} categoryList={categories ? categories : categoryList}
        handleFilter={filterTestimonies}
      />
       
      
        {activeCategory === 'All' ? (
          <div className='section-padding pt-16 pb-8'>
             {/* list all testimonies */}
            <div>

            </div>
             <SectionCard
                testimonies={testimonies}
                handleDropdown={handleDropdown}
                activeContent={activeContent}
             />
            
             
          </div> ) : (
        
        //  Content by category 
          <div className='section-padding pt-16 pb-8'>

            {/* if there  is testimony in category */}
            {filteredTestimonies ? 

                <SectionCard
                    testimonies={filteredTestimonies}
                    handleDropdown={handleDropdown}
                    activeContent={activeContent}
                />
              :
              <div>There are no current listed tesimony in this category</div>
            }
          </div> 
          
          )
        }

        <div className='section-padding py-16'>
          <p className="pb-6">Do you have a testimony?</p>
          <Link href={'/forms/testimony'}>
          <OutlineButtonBlack>Share your Testimony</OutlineButtonBlack>
          </Link>
        </div>
    </>
  );
};

export const getServerSideProps = async () => {

  let testimonyList = []

  let fetchError = []

  try {
    const query = '*[_type == "testimonySchema"]';
    testimonyList = await client.fetch(query);
  } catch (error) {
    fetchError.push({testimonySchema: JSON.stringify(error)})
  }

  return {
    props: { testimonyList, fetchError},
  };
};

export default index;
