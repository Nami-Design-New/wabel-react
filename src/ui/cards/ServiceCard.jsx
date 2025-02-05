import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div
      className="service_card"
      style={{
        backgroundImage: `${service.gradient}, url(${service.icon})`,
      }}
    >
      <div className="icon">
        <img src={service.image} alt="web" />
      </div>
      <h3>{service?.title}</h3>
      <p>{service?.description}</p>
      <Link href="services">
        إقراء المزيد <i className="fa-regular fa-angle-left"></i>
      </Link>
    </div>
  );
}
