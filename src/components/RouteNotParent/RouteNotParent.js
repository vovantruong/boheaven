import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

/**
 * note: Router but doesn't need parent tag for navigation, works independently as 2 different pages
 */

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
