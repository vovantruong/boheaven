import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MediaQueryContext } from "./Context/MainContext";

import { publicRoutes } from "./routes/routes";

import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";

function App() {
  const isMobile = useContext(MediaQueryContext);
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Routes>
          {publicRoutes?.map((routes, indexParent) => {
            const Page = routes?.components;
            const Layout = routes?.layout ?? DefaultLayout;
            const tabHeaderMobile = routes.tabHeaderMobile ?? true;
            const titlePageMobile = routes.titlePageMobile ?? '';
            return (
              <Route
                key={indexParent}
                path={routes.path}
                element={
                  isMobile ? (
                    <Layout
                      tabHeaderMobile={tabHeaderMobile}
                      titlePageMobile={titlePageMobile}
                    >
                      <Page />
                    </Layout>
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
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
                        >
                          {
                            children.children?.map((child, index) => {
                              const ChildPart1 = child.components;

                              return(
                                <Route
                                  key={index}
                                  path={`${child.path}`}
                                  element={<ChildPart1 />}
                                 />
                              )
                            })
                          }
                        </Route>
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
