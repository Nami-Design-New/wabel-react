import AboutUs from "../ui/Home/AboutUs";
import Blogs from "../ui/Home/Blogs";
import Clients from "../ui/Home/Clients";
import Faqs from "../ui/Home/Faqs";
import HeroSection from "../ui/Home/HeroSection";
import OurProjects from "../ui/Home/OurProjects";
import OurServices from "../ui/Home/OurServices";
import TeamMembers from "../ui/TeamMembers";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <TeamMembers />
      <OurServices />
      <OurProjects />
      <Faqs />
      <Blogs />
      <Clients />
    </>
  );
}
