import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "~/components/Modal/Modal";
import Feedback from "./Feedback/Feedback";
import PopupService from "./PopupService/PopupService";
import { MediaQueryContext } from "~/Context/MainContext";

const ShowModalSupport = ({ visible, setVisible, ...props }) => {
  const [changeFeedbackService, setChangeFeedbackService] = useState(false);
  const navigate = useNavigate();
  const isMobile = useContext(MediaQueryContext);

  if (isMobile) {
    navigate("/customer-service");
  }

  return (
    <>
      {!isMobile && (
        <Modal
          visible={visible}
          onCloseModal={() => {
            setVisible(false);
            setChangeFeedbackService(false);
          }}
          title={changeFeedbackService ? "意見反饋" : "聯絡我們"}
        >
          {changeFeedbackService ? (
            <Feedback />
          ) : (
            <PopupService
              onChangeFeedback={() => setChangeFeedbackService(true)}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default ShowModalSupport;
