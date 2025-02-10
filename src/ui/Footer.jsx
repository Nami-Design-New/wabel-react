import { Link } from "react-router-dom";
import { useGetServices } from "../hooks/services/useGetServices";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { services } = useGetServices();
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 p-2">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo-h.svg" loading="lazy" alt="وبل نجد" />
              </Link>
              <p>{t("footerAbout")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="col_info">
              <h3>{t("services")}</h3>
              <ul>
                {services?.map((service) => (
                  <li key={service.id}>
                    <Link to={`/service-details/${service.id}`}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="col_info">
              <h3>{t("contact")}</h3>
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
                {/* <li>
                  <i className="fa-light fa-mailbox"></i> س.ت : 1009153086
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="copy_rights">
              <p>
                &copy; {new Date().getFullYear()} {t("allRightsReserved")}{" "}
                {t("forWabelNajd")}
              </p>
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
    </footer>
  );
}
