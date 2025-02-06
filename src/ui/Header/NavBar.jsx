import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [hash]);
  // function handleScrolltoSection() {
  //   if (hash) {
  //     console.log(hash);

  //     const element = document.querySelector(hash);
  //     if (element) {
  //       element.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   }
  // }

  return (
    <nav className="container">
      <Link to="/" className="logo">
        <img src="/images/logo-h.svg" alt="" />
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/">الرئيسية</NavLink>
        </li>
        <li>
          <NavLink to="/about">من نحن</NavLink>
        </li>
        <li>
          <Link to="/#services">الخدمات</Link>
        </li>
        <li>
          <NavLink to="/portfolio">اعمالنا</NavLink>
        </li>
        <li>
          <Link to="/#blogs">المدونة</Link>
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
  );
}
