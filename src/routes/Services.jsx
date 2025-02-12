import { useTranslation } from "react-i18next";
import ServiceCard from "../ui/cards/ServiceCard";
import { gradiants } from "../utils/data";
import { useGetServices } from "../hooks/services/useGetServices";

export default function Services() {
  const { t } = useTranslation();
  const { services } = useGetServices();
  return (
    <>
      <section className="page_header">
        <div className="container">
          <h2 data-aos="fade-up">{t("ourServiceTitle")}</h2>
          <p data-aos="fade-up">{t("ourServiceSubTitle")}</p>
        </div>
      </section>
      <section className="service_page">
        <div className="container">
          <div className="row">
            {services?.map((service, index) => (
              <div key={service.id} className="col-lg-3 col-md-6 col-12 p-2">
                <ServiceCard service={service} gradient={gradiants[index]} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
