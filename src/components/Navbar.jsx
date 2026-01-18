import Logo from "/Frame 1.svg";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const base = "flex items-center gap-2 p-2";
  const active = "border-b border-dark-blue";

  return (
    <div className="flex justify-between items-center p-1.5 border-b border-b-border">
      <Link to="/" className="flex items-center gap-2 p-2">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="text-sm flex gap-10 font-bold text-dark-blue">
        <NavLink
          to="/xtract"
          className={({ isActive }) => `${base} ${isActive ? active : ""}`}
        >
          <i className="bx bx-search" />
          Xtract
        </NavLink>
        <NavLink
          to="/atlas"
          className={({ isActive }) => `${base} ${isActive ? active : ""}`}
        >
          <i className="bx bx-calendar-alt" />
          Atlas
        </NavLink>
        <NavLink
          to="workroom"
          className={({ isActive }) => `${base} ${isActive ? active : ""}`}
        >
          <i className="bx bxs-folder" />
          Workroom
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `${base} ${isActive ? active : ""}`}
        >
          <i className="bx bxs-user" />
          TL Dashboard
        </NavLink>
        <NavLink
          to="/conferences"
          className={({ isActive }) => `${base} ${isActive ? active : ""}`}
        >
          <i className="bx bx-globe" />
          Conferences
        </NavLink>
        <NavLink
          className={({ isActive }) => `${base} ${isActive ? active : ""}`}
          to="/news"
        >
          <i className="bx bxs-news" />
          News
        </NavLink>
      </nav>
      <div className="flex gap-5 text-xl">
        <i className="border border-border rounded hover:bg-border p-0.5 bx bx-play" />
        <i className="border border-border rounded hover:bg-border p-0.5 bx bxs-bell" />
        <i className="border border-border rounded hover:bg-border p-0.5 bx bxs-user" />
      </div>
    </div>
  );
}

export default Navbar;
