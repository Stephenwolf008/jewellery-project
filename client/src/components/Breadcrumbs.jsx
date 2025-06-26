import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter(Boolean);

  return (
    <div className="bg-lightSilver text-sm px-4 py-2 text-softGray">
      <nav className="max-w-7xl mx-auto flex gap-2">
        <Link to="/" className="hover:text-deepTeal">
          Home
        </Link>
        {crumbs.map((crumb, i) => {
          const path = "/" + crumbs.slice(0, i + 1).join("/");
          return (
            <span key={i}>
              &gt;{" "}
              <Link to={path} className="hover:text-deepTeal capitalize">
                {crumb}
              </Link>
            </span>
          );
        })}
      </nav>
    </div>
  );
}
