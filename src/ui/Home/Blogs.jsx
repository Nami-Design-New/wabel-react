import SectionHeader from "./SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogs } from "../../utils/data";
import BlogCard from "../cards/BlogCard";

export default function Blogs() {
  return (
    <section className="blogs_section" id="blogs">
      <div className="container">
        <div className="row">
          <SectionHeader
            title="أحدث المقالات والتحديثات التقنية"
            subTitle="اكتشف آخر الأخبار والمقالات حول التكنولوجيا، تطوير البرمجيات،
              وتحسين الأداء الرقمي لتبقى دائمًا في المقدمة."
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
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <BlogCard blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
