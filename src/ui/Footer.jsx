import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 p-2">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo-h.svg" loading="lazy" alt="وبل نجد" />
              </Link>
              <p>
                وبل نجد شركة رائدة في تقديم الحلول المتكاملة والخدمات المبتكرة
                التي تلبي احتياجات مختلف القطاعات. نحرص على تقديم أعلى مستويات
                الجودة والتميز، مع التركيز على الإبداع والتطوير المستمر لضمان
                رضا عملائنا.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="col_info">
              <h3>الخدمات</h3>
              <ul>
                <li>
                  <Link to="/service-details">تصميم وتطوير مواقع الويب</Link>
                </li>
                <li>
                  <Link to="/service-details">تطوير تطبيقات الجوال</Link>
                </li>
                <li>
                  <Link to="/service-details">إدارة التطبيقات</Link>
                </li>
                <li>
                  <Link to="/service-details">إدارة السوشيال ميديا</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="col_info">
              <h3>تواصل معنا</h3>
              <ul>
                <li>
                  <i className="fa-sharp fa-light fa-location-crosshairs"></i>{" "}
                  السعوديه نجد اﻟﺪور اﻟﺮاﺑﻊ .مكتب رقم 26
                </li>
                <li>
                  <i className="fa-light fa-envelope"></i>
                  <a href="mailto:info@wabel-najd.com">info@wabel-najd.com</a>
                </li>
                <li>
                  <i className="fa-sharp fa-light fa-phone"></i>
                  <a href="tel:+9665555555555">+9665555555555</a>
                </li>
                <li>
                  <i className="fa-light fa-mailbox"></i> س.ت : 1009153086
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="copy_rights">
              <p>&copy; جميع الحقوق محفوظة 2023 لدى وبل نجد</p>
              <div className="social_media">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </footer>
  );
}
