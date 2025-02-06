import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const heroImageRef = useRef(null);

  useEffect(() => {
    if (heroImageRef.current) {
      const imageRef = heroImageRef.current.querySelector("[data-aos]");
      if (imageRef && !imageRef.getAttribute("data-aos-delay")) {
        imageRef.setAttribute("data-aos-delay", "100");
      }
    }
    Aos.init({
      offset: 20,
      delay: 50,
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <section className="hero_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h6>شركة وبل نجد للتسويق والبرمجه</h6>
              <h1>
                قم بترقية علامتك التجارية باستخدام خبراء تحسين محركات البحث
                والتسويق الرقمي
              </h1>
              <p>
                مرحبًا بكم في وبل نجد حيث نتخصص في إحداث ثورة في تواجدك عبر
                الإنترنت من خلال حلول تحسين محركات البحث والتسويق الرقمي
                المتخصصة.
              </p>
              <div className="buttons">
                <Link to="/contact">تواصل معنا</Link>
                <Link to="/portfolio">عرض المشاريع</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="header-images-area">
              <div className="main-images-area">
                <div className="img1">
                  <img
                    ref={heroImageRef}
                    src="/images/header-img1.png"
                    alt=""
                    data-aos="zoom-in"
                  />
                </div>
                <div className="img2">
                  <img src="/images/header-imgbg.png" alt="" />
                </div>
                <div className="icons-area">
                  <img
                    src="/images/sound-icons1.svg"
                    alt=""
                    className="sound-icons1 aniamtion-key-1"
                  />
                  <img
                    src="/images/lite-icons1.svg"
                    alt=""
                    className="lite-icons1 aniamtion-key-1"
                  />
                </div>
                <div className="auhtor-icons">
                  <img
                    src="/images/elements2.png"
                    alt=""
                    className="elements2"
                  />
                  <img
                    src="/images/elements3.png"
                    alt=""
                    className="elements3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
