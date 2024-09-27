import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname === "/") {
    // Special case for root path "/"
    return (
      <div>
        <span>Home</span>
      </div>
    );
  }

  const paths = pathname.split("/").filter((path) => path !== "");

  return (
    <div>
      <Link to="/">Home</Link>
      {paths.map((path, index) => (
        <span key={index}>
          &nbsp;&gt;&nbsp;
          <Link to={`/${paths.slice(0, index + 1).join("/")}`}>
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
