import React, { useState, useRef, useContext } from "react";
import styles from "./Feedback.module.scss";
import classNames from "classnames/bind";
import InputText from "~/components/InputText/InputText";
import Textarea from "~/components/Textarea/Textarea";
import { AiOutlinePlus } from "react-icons/ai";
import PreviewImg from "../../../../assets/images/global/img-alt.png";
import { MediaQueryContext } from "~/Context/MainContext";

const cx = classNames.bind(styles);

const Feedback = () => {
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const isMobile = useContext(MediaQueryContext);
  
  const imageRef = useRef();

  const changeFile = (e) => {
    const arrImg = e.target.files;
    if (e.target.files[0] && e.target.files) {
      let image = [];
      for (let i = 0; i < arrImg.length; i++) {
        image.push(URL.createObjectURL(arrImg[i]));
      }
      setSelectedFile(image);
      setIsSelected(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ question, description });
  };

  return (
    <div className={cx("feedback")}>
      <form onSubmit={handleSubmit}>
        <InputText
          className={cx("question")}
          wrapClassName={cx('wrap')}
          label="意見反饋:"
          placeholder="請輸入問題"
          horizontal
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Textarea
          value={description}
          className={cx("description")}
          wrapClassName={cx('wrap')}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          horizontal
          label={isMobile ? "問題描述(內容20-200字)" :"問題描述:"}
          maxLength={200}
        />
        <div className={cx('group-upload')}>
          <div className={cx("image-preview")}>
            <img src={PreviewImg} alt="..." />
            <img src={PreviewImg} alt="..." />
            <img src={PreviewImg} alt="..." />
          </div>
          <div className={cx("change-file")}>
            <label htmlFor="upload">
              <AiOutlinePlus className={cx("icon")} />
              <span>新增圖片</span>
            </label>
            <input
              multiple
              ref={imageRef}
              type="file"
              id="upload"
              className={cx("upload")}
              onChange={changeFile}
              accept=".jpg, .png, .jpeg, .gif"
            />
            <br />
            <span>*文件格式為png、jpg、jpeg，且大小不超過15MB</span>
          </div>
        </div>

        <button className={cx("submit")} type="submit">
          送出
        </button>
      </form>
    </div>
  );
};

export default Feedback;
