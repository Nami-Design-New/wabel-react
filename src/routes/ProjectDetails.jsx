import { Link } from "react-router-dom";
import { useGetProjectDetails } from "./../hooks/projects/useGetProjectDetails";

export default function ProjectDetails() {
  const { projectDetails } = useGetProjectDetails();

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator
        .share({
          title: projectDetails?.title,
          text: projectDetails?.description,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Your device doesn't support sharing");
    }
  };

  return (
    <section className="project_details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 p-2">
            <div className="bordered_bx">
              <h1>{projectDetails?.title}</h1>
              <span>{projectDetails?.sub_title}</span>
              <div className="d-flex gap-4 flex-wrap">
                <h6>
                  <i className="fa-solid fa-user"></i> العميل:{" "}
                  {projectDetails?.customer_name}
                </h6>
                <h6>
                  <i className="fa-solid fa-calendar"></i> التاريخ:{" "}
                  {projectDetails?.date}
                </h6>
              </div>
              <p>{projectDetails?.description}</p>
              <p>{projectDetails?.sub_description}</p>
              <div className="buttons">
                <Link to="" className="view_project">
                  عرض المشروع <i className="fa-light fa-arrow-up-left"></i>
                </Link>
                <Link onClick={handleShare} className="view_project">
                  مشاركة المشروع <i className="fa-light fa-share-nodes"></i>
                </Link>
              </div>
            </div>
            <div className="images">
              <img src={projectDetails?.image} alt="project-s" />
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
                {projectDetails?.skills?.map((skill) => (
                  <li key={skill?.id}>{skill?.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
