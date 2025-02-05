import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to="project" className="project_card">
      <div className="img">
        <div className="link">
          <span>
            <i className="fa-light fa-arrow-right"></i>
          </span>
        </div>
        <img src={project.image} alt="circle" />
      </div>
      <div className="content">
        <h6>{project.title}</h6>
        <p>{project.description}</p>
        <div className="tags">
          {project?.tags?.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
      </div>
    </Link>
  );
}
