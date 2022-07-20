import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const RouteNotParent = ({ children, pathNameParent = "", outLetContext }) => {
  const [href, setHref] = useState(pathNameParent);
  const { pathname } = useLocation();
  useEffect(() => {
    let slice = pathname.split("/");
    let href = slice[slice.length - 1];
    setHref(href);
  }, [pathname]);

  return (
    <React.Fragment>
      {href === pathNameParent ? children : <Outlet context={outLetContext} />}
    </React.Fragment>
  );
};
export default RouteNotParent;
