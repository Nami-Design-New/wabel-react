import { Swiper, SwiperSlide } from "swiper/react";
import { useGetStuff } from "../hooks/useGetStuff";
import "swiper/css";
import "swiper/css/pagination";

const TeamMembers = () => {
  const { stuff } = useGetStuff();
  return (
    <section className="team">
      <div className="container">
        <h3 data-aos="fade-right">أعضاء الفريق</h3>
        <p data-aos="fade-left">
          الخدمات هي عروض احترافية تقدمها الشركات لتلبية احتياجات محددة أو لحل
          المشكلات لعملائها.
        </p>
        <Swiper
       
          spaceBetween={50}
          grabCursor={true}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            350: { slidesPerView: 1 },
          }}
          className="teamSwiper"
        >
          {stuff?.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-member" data-aos="fade-up">
                <div className="img">
                  <img src={member.image} alt={member.name} />
                  <ul className="social-media">
                    <li>
                      <a href={member?.facebook} target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={member?.insta}>
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={member?.twitter}>
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <h6>{member.name}</h6>
                <p>{member.job_title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamMembers;
