import ProjectCard from "../ui/Home/ProjectCard";
import { useGetProjects } from "../hooks/projects/useGetProjects";
import { useGetCategories } from "./../hooks/projects/useGetCategories";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();
  const { projects } = useGetProjects();
  const { categories } = useGetCategories();

  return (
    <section className="portfolio_page">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="portfolio_header">
              <div className="text">
                <h1>{t("portfolioTitle")}</h1>
                <p>{t("portfolioSubTitle")}</p>
              </div>
              <div className="img">
                <img src="/images/contact.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 p-2">
            <div className="filter">
              <button className="active">{t("allWorks")}</button>
              {categories?.map((category) => (
                <button key={category?.id}>{category?.name}</button>
              ))}
            </div>
          </div>
          {projects?.map((project) => (
            <div className=" col-lg-4 col-12 p-2" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
