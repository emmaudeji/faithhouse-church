import {useState} from 'react'
import SectionHeading from '../SectionHeading';
import { monthlyActivities } from '@/Data/monthlyActivities';

const MonthlyActivities = () => {
  const [showDescription, setShowDescription] = useState('')

  const handleClick = (title) => {
    if(showDescription === title){
      setShowDescription('')
    } else {
      setShowDescription(title)
    }
  }
  console.log(showDescription)
  return (
    <div>
      <SectionHeading heading1={'Monthly'} heading2='Activities' text={`We have a well structured monthly srvices that are filled with God's presence, unadultrated word of God and Power that turns people's lives around daily.`}/>
      
      <div className="grid gap-4">
        {
          monthlyActivities?.map(({id, title, theme, time, description}) => {
            return (
              <div key={id} className="border-b  border-zinc-300 ">
                <div className="flex gap-4 cursor-pointer" onClick={() => handleClick(title)}>
                  <h5 className="font-bold">{title}</h5>
                  <h5>{time}</h5>
                </div>
                <div className="flex justify-between">
                  <p onClick={() => handleClick(title)} className=" font-semibold cursor-pointer">
                    {theme}
                  </p>
                  <div onClick={() => handleClick(title)}
                  className='text-zinc-300 hover:scale-110 duration-300 cursor-pointer'>
                    {(showDescription === title) ? <p>x</p> : <p>v</p>}
                  </div>
                </div>
                <div className="pb-4">
                  {(showDescription === title) ? <p className="pt-4">
                  {description}
                </p> : null}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MonthlyActivities

