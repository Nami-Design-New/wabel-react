export default function SectionHeader({ title, subTitle }) {
  return (
    <div className="col-12 p-2 mb-3 text-center">
      <h2 data-aos="fade-up">{title}</h2>
      <p data-aos="fade-up">{subTitle}</p>
    </div>
  );
}
