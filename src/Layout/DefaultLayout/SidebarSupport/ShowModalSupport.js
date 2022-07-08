import React, {useState} from 'react'
import Modal from '~/components/Modal/Modal';
import Feedback from './Feedback/Feedback';
import PopupService from './PopupService/PopupService';


const ShowModalSupport = ({visible, setVisible, ...props}) => {
  const [changeFeedbackService, setChangeFeedbackService] = useState(false);
  return (
    <>
      <Modal
        visible={visible}
        onCloseModal={() => {setVisible(false);setChangeFeedbackService(false)}}
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
    </>
  )
}

export default ShowModalSupport