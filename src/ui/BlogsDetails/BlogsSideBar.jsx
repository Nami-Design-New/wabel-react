import { Link } from "react-router-dom";
export default function BlogsSideBar() {
  return (
    <div className="recent_blogs">
      <h3>المقالات الأخيرة</h3>

      <ul>
        <li>
          <Link to="blog-details">
            <h4>أفضل لغات البرمجة في 2024</h4>
          </Link>
        </li>
        <li>
          <Link to="blog-details">
            <h4>كيفية تطوير تطبيقات الويب الحديثة</h4>
          </Link>
        </li>
        <li>
          <Link to="blog-details">
            <h4>دليل شامل لتعلم الذكاء الاصطناعي</h4>
          </Link>
        </li>
        <li>
          <Link to="blog-details">
            <h4>تقنيات تحسين محركات البحث (SEO) في 2024</h4>
          </Link>
        </li>
        <li>
          <Link to="blog-details">
            <h4>أفضل أدوات إدارة المشاريع الرقمية</h4>
          </Link>
        </li>
        <li>
          <Link to="blog-details">
            <h4>أحدث اتجاهات تصميم واجهات المستخدم</h4>
          </Link>
        </li>
        <li>
          <Link to="blog-details">
            <h4>كيف تبدأ مسيرتك في تطوير الألعاب</h4>
          </Link>
        </li>
        <li>
          <Link to="blog-details">
            <h4>أمن المعلومات: نصائح لحماية بياناتك</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}
