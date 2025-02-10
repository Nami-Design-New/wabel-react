import { useGetServices } from "../../hooks/services/useGetServices";
import { gradiants } from "./../../utils/data";
import { useTranslation } from "react-i18next";
import ServiceCard from "../cards/ServiceCard";
import SectionHeader from "./SectionHeader";

export default function OurServices() {
  const { services } = useGetServices();
  const { t } = useTranslation();
  return (
    <section className="our_services" id="services">
      <div className="container">
        <div className="row">
          <SectionHeader
            title={t("ourServiceTitle")}
            subTitle={t("ourServiceSubTitle")}
          />
          {services?.map((service, index) => (
            <div key={service.id} className="col-lg-3 col-md-6 col-12 p-2">
              <ServiceCard service={service} gradient={gradiants[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
