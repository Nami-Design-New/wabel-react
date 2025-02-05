import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="about_us_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h6>عن شركة وبل نجد لتقنية المعلومات</h6>
              <h2>روّاد الحلول التقنية المتكاملة</h2>
              <p>
                نحن في <strong>شركة وبل نجد لتقنية المعلومات</strong> نقدم
                حلولًا تقنية مبتكرة لتطوير الأعمال وتعزيز التحول الرقمي. نمتلك
                فريقًا متخصصًا في <strong>تصميم المواقع</strong>،{" "}
                <strong>تطوير التطبيقات</strong>،{" "}
                <strong>إدارة التطبيقات</strong>، و
                <strong>إدارة السوشيال ميديا</strong>. نهدف إلى تقديم خدمات ذات
                جودة عالية تلبي احتياجات السوق السعودي والعالمي.
              </p>

              <div className="about_footer">
                <div className="r_list">
                  <ul>
                    <li>
                      <i className="fa-light fa-badge-check"></i> تصميم وتطوير
                      مواقع الويب
                    </li>
                    <li>
                      <i className="fa-light fa-badge-check"></i> إنشاء تطبيقات
                      جوال احترافية
                    </li>
                    <li>
                      <i className="fa-light fa-badge-check"></i> حلول متكاملة
                      لإدارة التطبيقات والسوشيال ميديا
                    </li>
                  </ul>
                  <Link to="about" className="btn">
                    {" "}
                    اعرف المزيد
                    <i className="fa-regular fa-arrow-up-left"></i>
                  </Link>
                </div>
                <div className="statistics">
                  <ul>
                    <li>
                      <h3>100%</h3>
                      <p>معدل النجاح</p>
                    </li>
                    <li>
                      <h3>544</h3>
                      <p>مشاريع مكتملة</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="about_imgs">
              <div className="img">
                <img src="/images/about1.jpg" alt="about" />
              </div>
              <div className="img toDown">
                <img src="/images/about2.jpg" alt="about" />
              </div>
              <div className="wabel">
                <img src="/images/fav.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
