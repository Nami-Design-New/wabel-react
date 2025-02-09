import { useGetServices } from "../../hooks/services/useGetServices";
import ServiceCard from "../cards/ServiceCard";
import SectionHeader from "./SectionHeader";
import { gradiants } from "./../../utils/data";

export default function OurServices() {
  const { services } = useGetServices();
  return (
    <section className="our_services" id="services">
      <div className="container">
        <div className="row">
          <SectionHeader
            title="حلول مبتكرة تلبي احتياجات متجددة"
            subTitle=" نعمل بشكل وثيق مع عملائنا لفهم متطلباتهم وتحدياتهم ونقدم الحلول
              الأكثر فعالية لتحقيق أهدافهم باستخدام التكنولوجيا الحديثة
              والأساليب الإبداعية"
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
