import { Swiper, SwiperSlide } from "swiper/react";
import { useGetProjects } from './../../hooks/projects/useGetProjects';
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function OurProjects() {

  const {projects} = useGetProjects();
  return (
    <section className="best_projects">
      <div className="container">
        <div className="row">
          <SectionHeader
            title="أصولكم الرقمية لوحة إبداعنا"
            subTitle="  نؤمن بأن الأفكار هي بداية كل شيء. لذا، نحن نتحمل مسؤولية إنماء
              وتطوير هذه الأفكار، ونبتكر الحلول الفعالة التي تحولها إلى مشاريع
              قوية ومبدعة، تغير حياة أصحابها وتحقق تطلعاتهم تحتاج إلى معرفته."
          />
          <div className="col-12 p-2">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop="true"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {projects?.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-12 p-2">
            <Link to="portfolio" className="view_more">
              عرض المزيد
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
