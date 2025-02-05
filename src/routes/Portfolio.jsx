import ProjectCard from "../ui/Home/ProjectCard";
import { projects } from "../utils/data";

export default function Portfolio() {
  return (
    <section className="portfolio_page">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="portfolio_header">
              <div className="text">
                <h1>رحلتنا مع النجاح تبدأ من هنا</h1>
                <p>
                  نقدم حلولاً تقنية تفوق التوقعات، حيث ندمج الإبداع مع الابتكار
                  لنصنع قصص نجاح حقيقية في مختلف القطاعات داخل المملكة وخارجها.
                </p>
              </div>
              <div className="img">
                <img src="assets/images/contact.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 p-2">
            <div className="filter">
              <button className="active">جميع الاعمال</button>
              <button>التصميم</button>
              <button>التطوير</button>
              <button>التسويق</button>
              <button>المواقع الإلكترونية</button>
              <button>تطبيقات الموبايل</button>
            </div>
          </div>
          {projects.map((project) => (
            <div className=" col-lg-4 col-12 p-2" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}

          {/* <div className=" col-lg-4 col-12 p-2">
              <Link to="project-details.html" className="project_card">
                  <div className="img">
                      <div className="link">
                          <span>
                              <i className="fa-light fa-arrow-right"></i>
                          </span>
                      </div>
                      <div className="link">
                          <span>
                              <i className="fa-light fa-arrow-right"></i>
                          </span>
                      </div>
                      <img src="assets/images/p1.webp" alt="circle">
                  </div>
                  <div className="content">
                      <h6>تطبيق circle</h6>
                      <p>
                          تطوير منصة رقمية متكاملة تهدف إلى تحسين تجربة المستخدم في مجال التجارة الإلكترونية،
                          مع توفير حلول ذكية لإدارة المنتجات والطلبات بسهولة.
                      </p>
                      <div className="tags">
                          <span>صفحة تعريفية</span>
                          <span>تطبيق Android & IOS</span>
                          <span>تصميم UI / UX</span>
                      </div>
                  </div>
              </Link>
          </div>
          <div className=" col-lg-4 col-12 p-2">
              <a href="project-details.html" className="project_card">
                  <div className="img">
                      <div className="link">
                          <span>
                              <i className="fa-light fa-arrow-right"></i>
                          </span>
                      </div>
                      <img src="assets/images/p2.webp" alt="circle">
                  </div>
                  <div className="content">
                      <h6>تطبيق circle</h6>
                      <p>
                          تطوير منصة رقمية متكاملة تهدف إلى تحسين تجربة المستخدم في مجال التجارة الإلكترونية،
                          مع توفير حلول ذكية لإدارة المنتجات والطلبات بسهولة.
                      </p>
                      <div className="tags">
                          <span>صفحة تعريفية</span>
                          <span>تطبيق Android & IOS</span>
                          <span>تصميم UI / UX</span>
                      </div>
                  </div>
              </a>
          </div>
          <div className=" col-lg-4 col-12 p-2">
              <a href="project-details.html" className="project_card">
                  <div className="img">
                      <div className="link">
                          <span>
                              <i className="fa-light fa-arrow-right"></i>
                          </span>
                      </div>
                      <img src="assets/images/p3.webp" alt="circle">
                  </div>
                  <div className="content">
                      <h6>تطبيق circle</h6>
                      <p>
                          تطوير منصة رقمية متكاملة تهدف إلى تحسين تجربة المستخدم في مجال التجارة الإلكترونية،
                          مع توفير حلول ذكية لإدارة المنتجات والطلبات بسهولة.
                      </p>
                      <div className="tags">
                          <span>صفحة تعريفية</span>
                          <span>تطبيق Android & IOS</span>
                          <span>تصميم UI / UX</span>
                      </div>
                  </div>
              </a>
          </div>
          <div className=" col-lg-4 col-12 p-2">
              <a href="project-details.html" className="project_card">
                  <div className="img">
                      <div className="link">
                          <span>
                              <i className="fa-light fa-arrow-right"></i>
                          </span>
                      </div>
                      <img src="assets/images/p4.webp" alt="circle">
                  </div>
                  <div className="content">
                      <h6>تطبيق circle</h6>
                      <p>
                          تطوير منصة رقمية متكاملة تهدف إلى تحسين تجربة المستخدم في مجال التجارة الإلكترونية،
                          مع توفير حلول ذكية لإدارة المنتجات والطلبات بسهولة.
                      </p>
                      <div className="tags">
                          <span>صفحة تعريفية</span>
                          <span>تطبيق Android & IOS</span>
                          <span>تصميم UI / UX</span>
                      </div>
                  </div>
              </a>
          </div>
          <div className=" col-lg-4 col-12 p-2">
              <a href="project-details.html" className="project_card">
                  <div className="img">
                      <div className="link">
                          <span>
                              <i className="fa-light fa-arrow-right"></i>
                          </span>
                      </div>
                      <img src="assets/images/p5.webp" alt="circle">
                  </div>
                  <div className="content">
                      <h6>تطبيق circle</h6>
                      <p>
                          تطوير منصة رقمية متكاملة تهدف إلى تحسين تجربة المستخدم في مجال التجارة الإلكترونية،
                          مع توفير حلول ذكية لإدارة المنتجات والطلبات بسهولة.
                      </p>
                      <div className="tags">
                          <span>صفحة تعريفية</span>
                          <span>تطبيق Android & IOS</span>
                          <span>تصميم UI / UX</span>
                      </div>
                  </div>
              </a>
          </div>
          <div className=" col-lg-4 col-12 p-2">
              <a href="project-details.html" className="project_card">
                  <div className="img">
                      <div className="link">
                          <span>
                              <i className="fa-light fa-arrow-right"></i>
                          </span>
                      </div>
                      <img src="assets/images/p6.webp" alt="circle">
                  </div>
                  <div className="content">
                      <h6>تطبيق circle</h6>
                      <p>
                          تطوير منصة رقمية متكاملة تهدف إلى تحسين تجربة المستخدم في مجال التجارة الإلكترونية،
                          مع توفير حلول ذكية لإدارة المنتجات والطلبات بسهولة.
                      </p>
                      <div className="tags">
                          <span>صفحة تعريفية</span>
                          <span>تطبيق Android & IOS</span>
                          <span>تصميم UI / UX</span>
                      </div>
                  </div>
              </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
