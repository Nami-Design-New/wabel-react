import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const { t } = useTranslation();
  return (
    <div className="blog_card">
      <div className="img">
        <img src={blog.image} alt="أفضل لغات البرمجة في 2024" />
      </div>
      <div className="content">
        <h5>{blog.title}</h5>
        <p>{blog.description}</p>
        <Link to={`blog-details/${blog.id}`}>
          {t("readMore")}
          <i className="fa-regular fa-arrow-left-long"></i>
        </Link>
      </div>
    </div>
  );
}
