import {useState} from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'
import WhyUs1 from '@/component/Home/WhyUs1'
import Community from '@/component/Home/Community'
import VisitorsForm from '@/component/forms/VisitorsForm'
import {dropdownVariants} from '@/component/animations/DropdownVariants'
import { AnimatePresence, motion } from 'framer-motion'
import Services from '@/component/Home/Services'
import MonthlyActivities from '@/component/Conect/MonthlyActivities'
import Address from '@/component/Address'
import FeedbackForm from '@/component/forms/FeedbackForm'
import PrayerRequestForm from '@/component/forms/PrayerRequestForm'

const connect = () => {
  const [showForm, setShowForm] = useState(false);
  return (
     <>
    <PageHeroBanner
      pageTitle='Connect >'
      heading='You deserve the right relationship to grow'
      image={'/girls-playing.jpg'}
      />

      <WhyUs1 text={`You are gladly welcome to Faithhouse Leadership Churches Worldwide (One global Leadership Church). Transforming lives and Nations with God's light. We are the International Center for Leadership, Diplomacy, Economic and Human Development.`} heading={'Who we are'} img={''} showBtn={false} logo={'international-logo.png'} smallText={true}/>

      <Community heading='Our Commitment' text='We guarantee you that if you stay with us for three months, you will experience a total transformation.' img={'experience.png'}/>   

      <div className="section-container">
        <div className='grid gap-2'>
          <p>{`In Faithhouse we make you successful.`}</p>
          <p>{`In Faithhouse you will surely see a vision of your future.`}</p>
          <p>{`In Faithhouse we teach and empower you to make money, make progress in life and help others become successful like you.`}</p>
          <p>{`In Faithhouse we enjoy blissfull marriage, quality training for your children and we encourage you to marry early.`}</p>
          <p>{`In Faithhouse we teach and empower you to become a person of integrity and discipline that will win sin everywhere you are.`}</p>
          <p className='font-bold  text-zinc-600'>{`No matter the type of sin and dirty habit that is harassing your life, in Faithhouse , such lifestyles will die a natural death in less than one month. There is a destiny restoration package we have for drug addicts, homosexuals, bandits, hoodlums and street boys and girls in our society.`}</p>
          <p>{`In Faithhouse we teach and empower every member to be filled with faith and courage to exercise victory in all areas of his or her life.`}</p>
          <p>{`In Faithhouse, you will experience an abundant life and live your full years. You will surely learn how to fight against failure, sickness and disease in Faithhouse `}</p>
          <p className='font-bold text-zinc-600'>{`In FAITHHOUSE we MAKE IT A CULTURE, that you LOVE AND SERVE JESUS CHRIST with all your life, soul, skills and talents EVERYWHERE you are found.`}</p>
          <p>{`Through the above, Faithhouse makes you the light of the world (Matthew 5:14). You will become part of the global leadership lights that God will be using this end time (Isaiah 49:5-6).`}</p>
          <p>{`God wants to use you to impact the world with your gift and intelligence and Faithhouse helps you to get that done.`}</p>
          <p>{`We believe you are the next testimony the world is waiting for. We will be so glad to meet you. We celebrate you in your leadership journey with us.`}</p>
          <p>{``}</p>
        </div>
      </div> 

      <div id='visitor-form' className="section-container py-4">
        <button onClick={() => setShowForm(!showForm)}
        className='w-full bg-zinc-200 p-4 text-center'>Start your leadership journey with us. Register here.</button>
      </div> 
      
      <div className="section-container visitors-form">
        <AnimatePresence>
          {showForm && <motion.div
            variants={dropdownVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className=""
          >
            <VisitorsForm/>
          </motion.div>}
        </AnimatePresence>
      </div>
      
      <div>
        <Services removePadding={true}/>
        <div id='monthly-activities' className="px-6 sm:px-16 md:px-36 py-6 bg-zinc-200">
          <MonthlyActivities/>
        </div>
      </div>

      <div id='contact' className='py-16 w-full  text-zinc-400 section-container justify-center items-center text-start'>
        <Address/>
      </div>
      
      <div id='feedback' className='py-24 bg-zinc-200 w-full section-container gap-10'>
        <div className="flex-1">
          <h3 className='text-xl font-bold pb-2 text-zinc-400 '>
            Give us your Feedback
          </h3>
          <div className='flex-1 p-4 border border-zinc-400 rounded'>
            <FeedbackForm/>
          </div>
        </div>
        <div className="flex-1">
          <h3 className='text-xl font-bold pb-2 text-zinc-400 '>
            Do you have a prayer request?
          </h3>
          <div className='flex-1 p-4 border border-zinc-400 rounded'>
            <PrayerRequestForm/>
          </div>
        </div>
      </div>
      <div className="volunteer" id="community">
        <Community heading={`Join our Community`} text={`Join us in making the world a better place. With your skills, talents and interests, we can make the body of Christ stronger and impact the world for good. Join our community groups today.`}/>
      </div>
    </>
  )
}

export default connect