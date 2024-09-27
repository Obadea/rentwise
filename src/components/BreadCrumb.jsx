import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const paths = pathname.split("/").filter((path) => path !== "");

  return (
    <div>
      {paths.map((path, index) => (
        <span key={index}>
          {index > 0 && <span>&nbsp;&gt;&nbsp;</span>}
          <Link to={`/${paths.slice(0, index + 1).join("/")}`}>
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
