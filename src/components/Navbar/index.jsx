import { MenuOpenOutlined, CloseOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const routes = [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "about",
      name: "About Me",
    },
    {
      route: "skills",
      name: "Skills",
    },
    {
      route: "projects",
      name: "Projects",
    },
    {
      route: "contact",
      name: "Contact Me",
    },
  ];

  return (
    <div className="navbar">
      <div>
        <span className="logo">Manoj.Dev</span>
      </div>
      <div className="desktop-options">
        {routes.map((obj) => (
          <NavLink
            to={obj.route}
            key={obj.route}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            {({ isActive }) => (
              <div className={isActive ? "link active" : "link not-active"}>
                <span className="decor">{"<"}</span>
                <span className="link-text">{obj.name}</span>
                <span className="decor">{"/>"}</span>
              </div>
            )}
          </NavLink>
        ))}
      </div>

      {!menuOpen && (
        <div
          className="mobile-menu-icon"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <MenuOpenOutlined className="icon" />
        </div>
      )}

      {menuOpen && (
        <div className="mobile-menu">
          <div className="close-box">
            <CloseOutlined
              className="close-icon"
              onClick={() => {
                setMenuOpen(false);
              }}
            />
          </div>
          <div className="mobile-links">
            {routes.map((obj) => (
              <NavLink
                to={obj.route}
                key={obj.route}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {({ isActive }) => (
                  <div className={isActive ? "link active" : "link not-active"}>
                    <span className="decor">{"<"}</span>
                    <span className="link-text">{obj.name}</span>
                    <span className="decor">{"/>"}</span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
