import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="top_bar">
        <div className="container">
          <div className="location_email">
            <ul>
              <li>
                <i className="fa-light fa-location-dot"></i>
                اﻟﺪور اﻟﺮاﺑﻊ . مكتب رقم 26
              </li>
              <li>
                <i className="fa-light fa-envelope"></i>
                <a to="mailto:info@wabel-najd.com">info@wabel-najd.com</a>
              </li>
              <li>
                <i className="fa-light fa-flag"></i>
                س.ت : 1009153086
              </li>
            </ul>
          </div>
          <div className="social_media">
            <ul>
              <li>
                <Link to="https://www.facebook.com/wabelnajd">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/wabel_najd/">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/wabel-najd/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.behance.net/wabelnajd">
                  <i className="fa-brands fa-behance"></i>
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/wabelnajd">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="container">
        <Link to="/" className="logo">
          <img src="/images/logo-h.svg" alt="" />
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className="active">
              الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">من نحن</NavLink>
          </li>
          <li>
            <a href="/#services">الخدمات</a>
          </li>
          <li>
            <NavLink to="/portfolio">اعمالنا</NavLink>
          </li>
          <li>
            <a href="/#blogs">المدونة</a>
          </li>
          <li>
            <NavLink to="/contact">تواصل معنا</NavLink>
          </li>
        </ul>
        <div className="layer"></div>

        <div className="actions">
          <Link
            to="assets/wabel.pdf"
            download="wabel.pdf"
            className="company_file"
          >
            ملف الشركة
          </Link>

          <button>EN</button>

          <button className="menu-button">
            <i className="fa-light fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
