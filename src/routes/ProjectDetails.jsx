import { Link } from "react-router-dom";

export default function ProjectDetails() {
  return (
    <section className="project_details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 p-2">
            <div className="bordered_bx">
              <h1>نظام ادارة الموظفين</h1>
              <p>
                يعد نظام إدارة الموظفين حلاً متكاملاً لإدارة شؤون الموظفين في
                المؤسسات والمنظمات. يتيح النظام تتبع الحضور والانصراف، إدارة
                الرواتب، وتقييم أداء الموظفين. كما يقدم تقارير شاملة حول
                الإنتاجية ويسهل التواصل بين الإدارات المختلفة. يعتمد النظام على
                تقنيات حديثة لضمان فعالية وسهولة الاستخدام.
              </p>
              <div className="buttons">
                <Link to="" className="view_project">
                  عرض المشروع <i className="fa-light fa-arrow-up-left"></i>
                </Link>
                <Link to="" className="view_project">
                  مشاركة المشروع <i className="fa-light fa-share-nodes"></i>
                </Link>
              </div>
            </div>
            <div className="images">
              <img src="/images/project-s.png" alt="project-s" />
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="bordered_bx">
              <h4>مميزات النظام:</h4>
              <ul>
                <li>إدارة الحضور والانصراف بدقة.</li>
                <li>إدارة الرواتب والمكافآت.</li>
                <li>إعداد تقارير الأداء.</li>
                <li>سهولة الوصول إلى البيانات من أي مكان.</li>
              </ul>
            </div>
            <div className="bordered_bx">
              <h4>التقنيات المستخدمة:</h4>
              <ul>
                <li>تكنولوجيا الويب الحديثة (HTML5, CSS3, JavaScript).</li>
                <li>أنظمة إدارة قواعد البيانات (SQL, NoSQL).</li>
                <li>الأطر البرمجية مثل React و Node.js.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
