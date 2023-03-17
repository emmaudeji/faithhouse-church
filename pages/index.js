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

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WhyUs1 />
      <Events />
      <Services />
      <WhyUs2 />
      <Resources />
      <Team />
      <Testimonial />
      <Community />
      <Organization />
      <Newsletter />
    </>
  );
}
