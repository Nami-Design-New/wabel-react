export default function SectionHeader({ title, subTitle }) {
  return (
    <div className="col-12 p-2 mb-3 text-center">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
}
