import { Swiper, SwiperSlide } from "swiper/react";
import { clients } from "../../utils/data";

export default function Clients() {
  return (
    <section className="clients_section">
      <div className="container">
        <div className="row">
          {" "}
          <div className="col-12 p-2">
            <h2>
              خدمنا أكثر من <span>300 عميل</span> .. ومن عملائنا
            </h2>
            <p>
              تشرفنا بخدمة عدد كبير من العملاء في جميع مجالات خدماتنا منذ 2006
              ولأكثر من 14 سنة ومازلنا نواصل
            </p>
          </div>
          <div className="col-12 p-2">
            {" "}
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              loop="true"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 5,
                },
              }}
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="logo">
                    <img src={client.image} loading="lazy" alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="swiper partnersSlider ">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="logo">
                    <img src="/images/c1.webp" loading="lazy" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="logo">
                    <img src="/images/c2.webp" loading="lazy" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="logo">
                    <img src="/images/c4.webp" loading="lazy" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="logo">
                    <img src="/images/c5.webp" loading="lazy" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="logo">
                    <img src="/images/c6.webp" loading="lazy" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="logo">
                    <img src="/images/c7.webp" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
