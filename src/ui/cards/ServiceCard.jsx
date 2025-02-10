import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, gradient }) {
  const { t } = useTranslation();
  return (
    <div
      className="service_card"
      data-aos="fade-up"
      style={{
        backgroundImage: `${gradient}, url(${service.image})`,
      }}
    >
      <div className="icon">
        <img src={service?.icon} alt="web" />
      </div>
      <h3>{service?.title}</h3>
      <p>{service?.description}</p>
      <Link href="services">
        {t("learnMore")} <i className="fa-regular fa-angle-left"></i>
      </Link>
    </div>
  );
}
