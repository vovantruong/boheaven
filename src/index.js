import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styles/GlobalStyles";
import { MainProvider } from "./Context/MainContext";

// <------------------- IMPORT LIBRARY SWIPER -----------------------> //
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainProvider>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </MainProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
