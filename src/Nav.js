import React, { createRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const [activeRoute, setActiveRoute] = useState(null);
  const location = useLocation();
  const routes = [
    {
      name: "home",
      path: "/",
      class: "fa-home",
    },
    {
      name: "projects",
      path: "/projects",
      class: "fa-folder-open",
    },
    {
      name: "contact",
      path: "/contact",
      class: "fa-envelope",
    },
  ];
  let linkNameRefs = [];

  useEffect(() => {
    const pathname = location.pathname;
    if (activeRoute) {
      const nowActive = routes.findIndex((route) => route.path === pathname);
      linkNameRefs[nowActive].current.classList.remove("text-hide");
      linkNameRefs[nowActive].current.classList.add("text-show");

      const lastActive = routes.findIndex(
        (route) => route.path === activeRoute
      );
      linkNameRefs[lastActive].current.classList.add("text-hide", "text-show");
    }
    setActiveRoute(pathname);
  }, [location.pathname]);

  const addRefs = (name) => {
    const newRef = createRef();
    linkNameRefs.push(newRef);
    return (
      <div className="nav-text" ref={newRef}>
        {name}
      </div>
    );
  };

  const mouseEnter = (i, path) => {
    if (activeRoute === path) {
      return;
    }
    linkNameRefs[i].current.classList.remove("text-hide");
    linkNameRefs[i].current.classList.add("text-show");
  };

  const mouseLeave = (i, path) => {
    if (activeRoute === path) {
      return;
    }
    linkNameRefs[i].current.classList.add("text-hide");
  };

  return (
    <nav className="nav">
      {routes.map((item, i) => (
        <NavLink
          exact
          to={item.path}
          key={item.name}
          className={"nav-item " + item.name}
          activeClassName="active-link show-text"
          onMouseEnter={() => mouseEnter(i, item.path)}
          onMouseLeave={() => mouseLeave(i, item.path)}
        >
          <span className={item.class}></span>
          {addRefs(item.name)}
        </NavLink>
      ))}
      <span className="fa-caret-right arrow"></span>
    </nav>
  );
};

export default Nav;
