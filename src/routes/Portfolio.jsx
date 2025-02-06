// import ProjectCard from "../ui/Home/ProjectCard";
// import { useGetProjects } from "../hooks/projects/useGetProjects";
// import { useGetCategories } from "./../hooks/projects/useGetCategories";

export default function Portfolio() {
  // const { projects } = useGetProjects();
  // const { categories } = useGetCategories();

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
                <img src="/images/contact.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 p-2">
            <div className="filter">
              <button className="active">جميع الاعمال</button>
              {/* {categories.map((category) => (
                <button key={category?.id}>{category?.title}</button>
              ))} */}
            </div>
          </div>
          {/* {projects.map((project) => (
            <div className=" col-lg-4 col-12 p-2" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
