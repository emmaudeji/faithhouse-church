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
import Newsletter from "@/component/Home/Newsletter";
import { client } from "@/lib/client";

export default function Home({ testimonyList }) {
  return (
    <>
      <HeroBanner />
      <WhyUs1
        text="We are a community of impact driven people passionate about raising leaders of integrity and excellence for national transformation"
        heading="We are not just a church"
        img="men-in-worship.jpg"
        showBtn={true}
      />
      <Events />
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
  const query = '*[_type == "testimonySchema"]';
  const testimonyList = await client.fetch(query);

  return {
    props: { testimonyList },
  };
};
