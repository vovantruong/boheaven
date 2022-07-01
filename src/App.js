import { useEffect, Fragment, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MediaQueryContext } from "./Context/MainContext";

import { publicRoutes } from "./routes/routes";

import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import MobileTabLayout from "./Layout/MobileTabLayout/MobileTabLayout";

function App() {
  const isMobile = useContext(MediaQueryContext);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes?.map((routes, indexParent) => {
            const Page = routes?.components;
            let Layout = routes?.layout;
            let nameLayoutMobile = routes.nameLayoutMobile;
            if(!isMobile){
              Layout = routes?.layout ?? DefaultLayout;
            }else{
              if(routes.layoutMobile){
                Layout = routes?.layoutMobile ?? MobileTabLayout;
              }
            }
            return (
              <Route
                key={indexParent}
                path={routes.path}
                element={
                  <Layout name={nameLayoutMobile}>
                    <Page />
                  </Layout>
                }
              >
                {routes?.children
                  ? routes.children?.map((children, indexChild) => {
                      const Children = children.components;
                      return (
                        <Route
                          key={indexChild}
                          path={`${children.path}`}
                          element={<Children />}
                        />
                      );
                    })
                  : null}
              </Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
