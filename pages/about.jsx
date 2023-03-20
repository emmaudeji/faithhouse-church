import React from 'react'
import PageHeroBanner from '@/component/PageHeroBanner'
import WhyUs1 from '@/component/Home/WhyUs1'
import SectionHeading from '@/component/SectionHeading'
import Community from '@/component/Home/Community'
import { pillars } from '@/Data/pillars'
import Team from '@/component/Home/Team'
import Organization from '@/component/Home/Organization'


const about = () => {
  return (
    <>
    <PageHeroBanner
      pageTitle='About Us >'
      heading='We passionate about national transformation'
      image={'/executive-lady.jpg'}
      />

      <WhyUs1 text={`You are gladly welcome to Faithhouse Leadership Churches Worldwide (One global Leadership Church). Transforming lives and Nations with God's light. We are the International Center for Leadership, Diplomacy, Economic and Human Development.`} heading={'Who we are'} img={''} showBtn={false} logo={'international-logo.png'} smallText={true}/>
        
      <div className="grid w-full px-6 sm:px-16 lg:px-36  gap-4 pb-24">
        <div className="vision">
          <SectionHeading heading1={'Our'} heading2={'Vison'} text={'Restoration of diverted destinies, raising a people of integrity and standard who are passionately commited to leadership development and national transformation.'}/>
        </div>

        <div className="mision  ">
          <SectionHeading heading1={'Our'} heading2={'Mision'} text={'We are saddled with these divine assignment'}/>
            <div className="pl-6 grid gap-4 pb-6">
              <p className='border-b border-zinc-300'>To champion a functional leadership education of influence and dominion in Christ</p>
              <p className='border-b border-zinc-300'>To become a statement making church organization in leadership development and national transformation</p>
            </div>
        </div>

        <div className="culture  ">
          <SectionHeading heading1={'Our'} heading2={'Culture'} text={'To stir up in everyone we meet unto a life of integrity and excellence until they become leaders in national transformation.'}/>
        </div>

        <div className="values  ">
          <SectionHeading heading1={'Our'} heading2={'Values'} text={'Our values is what makes us'}/>
            <div className="pl-6 grid gap-4 pb-6 sm:grid-cols-2 lg:grid-cols-3">
              <p className='border-b border-zinc-300'>
                Faith
              </p>
              <p className='border-b border-zinc-300'>
                Leadership
              </p>
              <p className='border-b border-zinc-300'>
                Integrity
              </p>
              <p className='border-b border-zinc-300'>
                Intercession
              </p>
              <p className='border-b border-zinc-300'>
                Excellence
              </p>
            </div>
        </div>
      </div>

      <Community heading={'Prophetic Pillars'} text={`As a divine assignment, we function under 12 prophetic pillars as was received by our team leader, Rev. Ikenna Emmanuel. This 12 pillars is synonimous to the 12 stones God gave the Isrealites in Exodus ... `}
      list={pillars}/>

      <div className=" grid  w-full px-6 sm:px-16 lg:px-36  pb-24">
        <SectionHeading heading1={`Our`} heading2={'History'} text={'We have a history of continous growth and impact'}/>
        <div className='grid gap-6'>
          <p className="h">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur autem dolorum reprehenderit, culpa quis et veritatis. Sed officia nostrum inventore optio, placeat natus autem, labore, quaerat cumque atque recusandae?
          </p>
          <p className="h">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium exercitationem adipisci ipsam nulla deleniti iure error nihil vitae. Aspernatur, aliquam quisquam. Minima, consequuntur nulla.
          </p>
          <p className="f">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi eius tempore, natus illo quaerat nesciunt similique ipsa commodi nobis neque ipsam architecto. Aperiam, alias dolorum porro itaque qui dignissimos placeat amet nihil ipsam nemo aliquid facere? Esse tempore eligendi, necessitatibus fugiat eos, magnam illo aspernatur qui at eaque quod!
          </p>
          <p className="f">
            Aperiam, alias dolorum porro itaque qui dignissimos placeat amet nihil ipsam nemo aliquid facere? Esse tempore eligendi, necessitatibus fugiat eos, magnam illo aspernatur qui at eaque quod!
          </p>
          <p className="f">
            Lorem ipsum doOurlor sit amet consectetur adipisicing elit. Dolorum modi eius tempore, natus illo quaerat nesciunt similique ipsa commodi nobis neque ipsam architecto. Aperiam, alias dolorum porro itaque qui dignissimos placeat amet nihil ipsam nemo aliquid facere? Esse tempore eligendi, necessitatibus fugiat eos, magnam illo aspernatur qui at eaque quod!
          </p>
        </div>
      </div>

      <div className=" grid  w-full px-6 sm:px-16 lg:px-36  ">
        <SectionHeading heading1={`Our`} heading2={'Pastors'} text={'Our pastors are passionate about success. '}/>
      </div>

      <Team/>
      
      <Organization/>
    </>
  )
}

export default about