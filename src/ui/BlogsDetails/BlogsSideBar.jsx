import { Link, useParams } from "react-router-dom";
import { useGetBlogs } from "../../hooks/blogs/useGetBlogs";

export default function BlogsSideBar() {
  const { blogs } = useGetBlogs();
  const { id } = useParams();
  return (
    <div className="recent_blogs">
      <h3>المقالات الأخيرة</h3>

      <ul>
        {blogs
          ?.filter((blog) => blog?.id !== id)
          ?.map((blog) => (
            <li key={blog?.id}>
              <Link to={`/blog-details/${blog?.id}`}>
                <h4>{blog?.title}</h4>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
