export default function HeroSection() {
  return (
    <section className="hero_section">
      <img src="/images/element1.png" alt="ball" className="element1" />
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
                <a href="contact.html">تواصل معنا</a>
                <a href="portfolio.html">عرض المشاريع</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="header-images-area">
              <div className="main-images-area">
                <div className="img1">
                  <img
                    src="assets/images/header-img1.png"
                    alt=""
                    data-aos="zoom-in"
                  />
                </div>
                <div className="img2">
                  <img src="assets/images/header-imgbg.png" alt="" />
                </div>
                <div className="icons-area">
                  <img
                    src="assets/images/sound-icons1.svg"
                    alt=""
                    className="sound-icons1 aniamtion-key-1"
                  />
                  <img
                    src="assets/images/lite-icons1.svg"
                    alt=""
                    className="lite-icons1 aniamtion-key-1"
                  />
                </div>
                <div className="auhtor-icons">
                  <img
                    src="assets/images/elements2.png"
                    alt=""
                    className="elements2"
                  />
                  <img
                    src="assets/images/elements3.png"
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
