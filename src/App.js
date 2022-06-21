import { useEffect, Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { publicRoutes } from "./routes/routes";

import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes?.map((routes, indexParent) => {
            const Page = routes?.components;
            let Layout = routes?.layout ?? DefaultLayout;
            return (
              <Route
                key={indexParent}
                path={routes.path}
                element={
                  <Layout >
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
