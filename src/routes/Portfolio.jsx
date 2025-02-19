import ProjectCard from "../ui/Home/ProjectCard";
import { useGetProjects } from "../hooks/projects/useGetProjects";
import { useGetCategories } from "./../hooks/projects/useGetCategories";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Portfolio() {
  const { t } = useTranslation();
  const { projects } = useGetProjects();
  const { categories } = useGetCategories();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory("all");
    }
  }, [searchParams]);

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
              <button
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => setSearchParams({})}
              >
                {t("allWorks")}
              </button>
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  className={activeCategory === category?.name ? "active" : ""}
                  onClick={() => setSearchParams({ category: category?.name })}
                >
                  {category?.name}
                </button>
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
