import {useState, useEffect, useCallback} from 'react'
import { useRouter } from "next/router"
import PageHeroBanner from '@/component/PageHeroBanner'
import { months, series } from '@/Data/months'
import {  getData } from '@/hooks/getDataForSuccessThoughts'
// import { getContentByCategory, getContentByMonthlyView } from '@/hooks/getSuccessThoughts'
import { daylist28, daylist29, daylist30, daylist31 } from "@/Data/daylist";
import OutlineButtonBlack from '@/component/buttons/OutlineButtonBlack';

export const getServerSideProps = async () => {

  const {data, err} = await getData();

  return {
    props: {
      data: data ?  data : 'no data. check api status', 
      err,
    }
  }  
}



const Success = (props) => {
  const {data, err} = props
  const [mainData, setMainData] = useState(data)
  const {query} = useRouter()
  const monthsArr = months.map(item => (item.month))
  
  console.log('mainData', mainData, 'err---', err,  'data---', data, 'today', query.date && query.date[0], 'dateee', String(new Date().getDate()), 'dayyyyyy');

  const [active, setActive] = useState('month')
  const [daysoftheMonth, setDaysoftheMonth] = useState(daylist31);
  const [activeYear, setActiveYear] = useState(String(new Date().getFullYear()))
  const [activeMonth, setActiveMonth] = useState(monthsArr[new Date().getMonth()])
  const [activeDay, setActiveDay] = useState(String(new Date().getDate()))
  const [content, setContent] = useState([])
  const [activeSeries, setActiveSeries] = useState('Success')
  const [seriesContent, setSeriesContent] = useState([])
  const [dropdownContent, setDropdownContent] = useState('')

  useEffect(()=> {
    if(query.date) {
      setActiveDay(query.date[0])
      setActive('month')
    }
  }, [])
 

  // generate year list
  const newList = mainData && mainData.length && mainData.map(item => {
    return {name: String(new Date(item.date).getFullYear())}
  })
  const yearList = newList && newList.length && newList.reduce((acc, curr) => {
    if(!acc.includes(curr.name)){acc.push(curr.name)}
    return acc
  }, []).sort()

  // onClick month: select a type of calender date to display
  const findMonth =  (month) => {
    if (month === "February") {
      setDaysoftheMonth(daylist29);
    } else if (["September", "April", "June", "November" ].includes(month)  ) {
      setDaysoftheMonth(daylist30);
    } else if (["January", "March",  "May", "June", "July", "August", "September", "October", "December"].includes(month)   ) {
      setDaysoftheMonth(daylist31);
    } 
  };

  useEffect(() => {
     findMonth(activeMonth)
     setActiveDay('0')
  }, [activeMonth])


  // search for content from data when a date is clicked
  const handleClickDay = useCallback(async (day) => {
    let monthIndex = "" 
    months?.map(item => {
      if(item.month === activeMonth) {
        monthIndex = item.id
      } else {
        return ''
      }
    })
    const dateString = monthIndex + '/' + day + '/' + activeYear;
    const newcontent = await mainData && mainData.length && mainData.filter(item => item.date === dateString)
    setContent(newcontent)
    // console.log('dateString-', content, dateString, typeof dateString, data[0])
  }, [activeDay, setActiveDay]
)
  useEffect(() => {
    handleClickDay(activeDay)
  }, [activeDay])
  

// search content by category view
  // const {f} = getContentByCategory();
  const handleClickSeries = () => {
    const result = mainData?.filter(item => {
      return item.Category.includes(activeSeries)
    })
    setSeriesContent(result)
    // console.log('dataBySeries', result)
  }

  useEffect(() => {
    handleClickSeries()
    setActive('series')
  }, [activeSeries])
  
  const handleDropdown = (Timestamp) => {
    if(dropdownContent === Timestamp) {
      setDropdownContent('')
    } else {
      setDropdownContent(Timestamp)
    }
  }

 
  return (
     <>
    <PageHeroBanner
      pageTitle='Success thoughts >'
      heading='inspirations to help you succeed'
      image={'/executive-lady.jpg'}
      />

      <div className="h-16 section-container" id="today">

      </div>

      <div className='flex flex-col section-padding border-b border-zinc-300'>
        <p className='pb-4'>Read by category</p>
        <div className='flex gap-0'>
          <div  onClick={() => setActive('month')} >
            <p className={`p-4 border-r border-zinc-300 onHover ${active === 'month' ? 'bg-zinc-300': ''}`}
            >Monthly</p>
          </div>
          <div onClick={() => setActive('series')}>
            <p className= {`p-4 border-zinc-300 onHover ${active === 'series' ? 'bg-zinc-300': ''}`}>Category</p>
          </div>
        </div>
      </div>

      

      {mainData && mainData.length !== 0 && active === 'month' && <>
      
      <div className='navbar-month px-6 sm:px-16 lg:px-36 '>

        {/* year bar */}
        <div className='flex gap-0 w-full items-center overflow-auto scrollbar-hidden'>
         { 
          yearList?.map((item, i) => {
            return (
              <div key={i} onClick={() => setActiveYear('2023')} >
                <p className={`py-3 px-7 border-zinc-300 onHover ${activeYear === '2023' ? 'bg-zinc-300': ''}`}>
                  {item}
                </p>
              </div>
            )
          })
          }
        </div>

        {/* month bar */}
        <div className="flex gap-0 w-full items-center overflow-auto scrollbar-hidden border-b border-zinc-300">
          {
            months?.map(({month, id}) => {
              return (
                <div className='w-full text-center' key={id} onClick={() => setActiveMonth(month)}>
                  <p className={`p-2 border-r border-l border-zinc-300 onHover ${month === activeMonth ? "bg-zinc-300" : null}` }>
                    {month}
                </p>
                </div>
              )
            })
          }
        </div>
        
        {/* Days section bar */}
        <div className='days'>
          <div className="grid grid-cols-8 sm:grid-cols-11 gap-0 w-80 items-center ">
            {
              daysoftheMonth?.map((day, i) => {
                return (
                  <div key={i} onClick={() => setActiveDay(day)}>
                  <div className={`w-8 py-2 text-center border-b border-zinc-300 hover:bg-zinc-300 duration-300 ${day === activeDay ? "bg-zinc-300" : null} cursor-pointer`}>
                      {day}
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
      
      {/* content view */}
      <div className="content py-8 section-padding">
        <div>
          {
            (content && content.length !== 0 ) ? content.map(({Author, Category, date, Invitation, Power_word_for_today, Prayers, Read_and_think, Scriptures, Scriptures_text, Series_topic, Timestamp, Todays_topic}, index) => {
              let content = Read_and_think.split('\n')
              return (
                <div key={index} className='pb-10'>
                  <p className='text-zinc-400' >{`Date: ${date}`}</p>
                  <p className='pt-2 font-bold text-lg capitalize' >{`Series Topic: ${Series_topic}`}</p>
                  <p className=' font-bold text-lg capitalize' >{`Today's Topic: ${Todays_topic}`}</p>
                  <p className='pt-1  capitalize' >{`Author: ${Author}`}</p>
                  <p className='pt-4 font-bold text-zinc-400 text-lg capitalize' >{`Today's Bible Power: ${Scriptures}`}</p>
                  <p className=' pb-8' >{`Today's Bible Power: ${Scriptures_text}`}</p>

                  <div className='border-b border-zinc-400'>
                    <p className='font-bold text-zinc-400 text-lg border-b border-zinc-400'>Read and Think</p>
                    {
                    content?.map((item, i) => (<p key={i}
                    className='pt-2'>
                      {item}
                    </p>))
                    }
                  </div>

                  <p className="pt-10 text-zinc-400 font-bold">Say This Prayer</p>
                  <p className='' >{`Today's Bible Power: ${Prayers}`}</p>
                  {Invitation && <p className=' pt-2' >{`Today's Bible Power: ${Invitation}`}</p>}
                  <p className="pt-4 font-bold text-zinc-400">
                    Power Word for Today: 
                  </p>
                  <p>{Power_word_for_today}</p>
                </div>
              )
            }) : <div>
                   { 
                      <div className='py-10 w-full text-lg font-semibold text-zinc-300 items-center'>
                      Resources are not available for this date. Select from a Series list.
                      <div className="text-black pt-3 font-normal"
                      onClick={() => setActiveSeries(series[1].category)}>
                        <OutlineButtonBlack>Select Series</OutlineButtonBlack></div>
                    </div>
                   }
                 </div>
          }
        </div>
      </div>
    </> 
    }

      

      {mainData && mainData.length !== 0 && active === 'series' && <>
        {/* Series section bar */}
        <div className='px-6 sm:px-16 lg:px-36 '>
            <div className="flex gap-0 w-full items-center overflow-auto scrollbar-hidden border-b border-zinc-300">
          {
            series?.map(({category, id}, i) => {
              return (
                <div className='w-full text-center' key={id} onClick={() => setActiveSeries(category)}>
                  <p className={`p-2 border-r border-l border-zinc-300 onHover ${category === activeSeries ? "bg-zinc-300" : null}` }>
                    {category}
                </p>
                </div>
              )
            })
          }
        </div>
        </div>

        {/* Series content */}
        <div className="content py-8 section-padding">
          <div>
            {seriesContent ? (seriesContent.length ? seriesContent.map(({Author, Category, date, Invitation, Power_word_for_today, Prayers, Read_and_think, Scriptures, Scriptures_text, Series_topic, Timestamp, Todays_topic}, index) => {
                let content = Read_and_think.split('\n')
                return (
                  <div key={index} className='pb-10 border-b border-zinc-300'>
                    <div onClick = {() => handleDropdown(Timestamp)}
                    className='onHover'>
                      <p className='text-zinc-400' >{`Date: ${date}`}</p>
                      <p className='pt-2 font-bold text-lg capitalize' >{`Series Topic: ${Series_topic}`}</p>
                      <p className=' font-bold text-lg capitalize' >{`Today's Topic: ${Todays_topic}`}</p>
                      <p className='pt-1  capitalize' >{`Author: ${Author }`}</p>
                    </div>
                    
                  {dropdownContent === Timestamp && <div >
                      <p className='pt-4 font-bold text-zinc-400 text-lg capitalize' >{`Today's Bible Power: ${Scriptures}`}</p>
                        <p className=' pb-8' >{`Today's Bible Power: ${Scriptures_text}`}</p>

                        <div className='border-b border-zinc-400'>
                          <p className='font-bold text-zinc-400 text-lg border-b border-zinc-400'>Read and Think</p>
                          {
                          content?.map((item, i) => (<p key={i}
                          className='pt-2'>
                            {item}
                          </p>))
                          }
                        </div>

                        <p className="pt-10 text-zinc-400 font-bold">Say This Prayer</p>
                        <p className='' >{`Today's Bible Power: ${Prayers}`}</p>
                        {Invitation && <p className=' pt-2' >{`Today's Bible Power: ${Invitation}`}</p>}
                        <p className="pt-4 font-bold text-zinc-400">
                          Power Word for Today: 
                        </p>
                        <p>{Power_word_for_today}</p>
                  </div>}
                  
                  </div>
                )
              })  :
              <div>
                    { 
                      <div className='py-10 w-full text-lg font-semibold text-zinc-300 items-center'>
                        Resources are not available for this category. Select another series
                      </div>
                    }
              </div>) : (
                <div className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
                  Resources are not available
                </div>
              )
            }
          </div>
        </div>
      </>
      }

       { 
        // show this on page load
        mainData && mainData.length !== 0 && active === '' && (
            <div onClick={() => setActive('month')}
            className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
                Load resources
            </div>)

       } 
       {
        mainData && mainData.length === 0 && (
            <div className='h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center'>
                Resources not available. Check your network connection
            </div>)
      }
    </>
  )
}

export default Success