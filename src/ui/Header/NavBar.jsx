import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/slices/language";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function NavBar() {
  const { hash } = useLocation();
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

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

  const handleLang = (newLang) => {
    queryClient.invalidateQueries();
    dispatch(setLanguage(newLang));
    i18next.changeLanguage(newLang);
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("en", newLang === "en");
    }
  };

  return (
    <nav className="container">
      <Link to="/" className="logo">
        <img src="/images/logo-h.svg" alt="" />
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/">{t("home")}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{t("about")}</NavLink>
        </li>
        <li>
          <Link to="/#services">{t("services")}</Link>
        </li>
        <li>
          <NavLink to="/portfolio">{t("portfolio")}</NavLink>
        </li>
        <li>
          <Link to="/#blogs">{t("blogs")}</Link>
        </li>
        <li>
          <NavLink to="/contact">{t("contact")}</NavLink>
        </li>
      </ul>
      <div className="layer"></div>

      <div className="actions">
        <Link to="/wabel.pdf" download="wabel.pdf" className="company_file">
          {t("companyFile")}
        </Link>
        <button onClick={() => handleLang(lang === "en" ? "ar" : "en")}>
          {lang === "en" ? "AR" : "EN"}
        </button>
        <button className="menu-button">
          <i className="fa-light fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
