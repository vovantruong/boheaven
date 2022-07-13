import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MediaQueryContext } from "~/Context/MainContext";
import styles from "./CustomerService.module.scss";
import classNames from "classnames/bind";
import PopupService from "~/Layout/DefaultLayout/SidebarSupport/PopupService/PopupService";
import Feedback from "~/Layout/DefaultLayout/SidebarSupport/Feedback/Feedback";

const cx = classNames.bind(styles);
const CustomerService = () => {
  const [changeFeedbackService, setChangeFeedbackService] = useState(false);
  const isMobile = useContext(MediaQueryContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isMobile) {
      navigate("/");
    }
  }, [pathname]);

  return (
    <div className={cx("customer-service")}>
      {changeFeedbackService ? (
        <div className="container-fluid">
          <Feedback />
        </div>
      ) : (
        <div className="container">
          <div></div>
          <PopupService
            onChangeFeedback={() => setChangeFeedbackService(true)}
          />
        </div>
      )}
    </div>
  );
};

export default CustomerService;
