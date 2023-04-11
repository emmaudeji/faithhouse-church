import HeroBanner from "@/component/Home/HeroBanner";
import Services from "@/component/Home/Services";
import WhyUs1 from "@/component/Home/WhyUs1";
import Events from "@/component/Home/Events";
import WhyUs2 from "@/component/Home/WhyUs2";
import Resources from "@/component/Home/Resources";
import Team from "@/component/Home/Team";
import Testimonial from "@/component/Home/Testimonial";
import Community from "@/component/Home/Community";
import Organization from "@/component/Home/Organization";
import { client } from "@/lib/client";

export default function Home({ testimonyList, eventData, heroBannerData, fetchError }) {
  fetchError.length && console.log(fetchError)

  return (
    <>
      <HeroBanner heroBannerData={heroBannerData}/>
      <WhyUs1
        text="We are a community of impact driven people passionate about raising leaders of integrity and excellence for national transformation"
        heading="We are not just a church"
        img="men-in-worship.jpg"
        showBtn={true}
      />
      <Events eventData={eventData} />
      <Services />
      <WhyUs2 />
      <Resources />
      <Team />
      <Testimonial testimonyList={testimonyList} />
      <Community
        heading="Volunteer Today"
        text="One of the central ways we grow as disciples of Jesus is by having intentional relationships with people who share the same goal.Join any of our community today and let’s grow together."
      />
      <Organization />
    </>
  );
}

export const getServerSideProps = async () => {
  let testimonyList = []
  let eventData = []
  let heroBannerData = []

  let fetchError = []

  try {
    const query = '*[_type == "testimonySchema"]';
    testimonyList = await client.fetch(query);
  } catch (error) {
    fetchError.push({testimonySchema: JSON.stringify(error)})
  }

  try {
    const queryEvents = '*[_type == "eventSchema"]';
    eventData = await client.fetch(queryEvents);
  } catch (error) {
    fetchError.push({eventSchema: JSON.stringify(error)})
  }

  try {
    const heroBanner = '*[_type == "heroBanner"]';
    heroBannerData = await client.fetch(heroBanner);
  } catch (error) {
    fetchError.push({heroBanner: JSON.stringify(error)})
  }

  return {
    props: { testimonyList, eventData, heroBannerData, fetchError },
  };
};
