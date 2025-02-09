import { Link } from "react-router-dom";

export default function ServiceCard({ service, gradient }) {
  return (
    <div
      className="service_card"
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
        إقراء المزيد <i className="fa-regular fa-angle-left"></i>
      </Link>
    </div>
  );
}
