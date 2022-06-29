import React, { useState, useRef } from "react";
import styles from "./Feedback.module.scss";
import classNames from "classnames/bind";
import InputText from "~/components/InputText/InputText";
import Textarea from "~/components/Textarea/Textarea";
import { AiOutlinePlus } from "react-icons/ai";
import PreviewImg from '../../../../assets/images/global/img-alt.png';

const cx = classNames.bind(styles);

const Feedback = () => {
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);


  const changeFile = (e) => {
    setSelectedFile(e.target.files[0]);
		setIsSelected(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ question, description });
  };

  return (
    <div className={cx("feedback")}>
      <form onSubmit={handleSubmit}>
        <InputText
          className={cx("question")}
          label="意見反饋:"
          placeholder="請輸入問題"
          horizontal
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Textarea
          value={description}
          className={cx("description")}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          horizontal
          label="問題描述:"
          maxLength={200}
        />
       <div className={cx('image-preview')}>
          <img src={PreviewImg} />
          <img src={PreviewImg} />
          <img src={PreviewImg} />
       </div>
        <div className={cx("change-file")}>
          <label htmlFor="upload">
            <AiOutlinePlus className={cx("icon")} />
            <span>新增圖片</span>
          </label>
          <input
            multiple
            type="file"
            id="upload"
            className={cx("upload")}
            onChange={changeFile}
            accept=".jpg, .png, .jpeg"
          />
          <br />
          <span>*文件格式為png、jpg、jpeg，且大小不超過15MB</span>
        </div>
        <button className={cx("submit")} type="submit">
          送出
        </button>
      </form>
    </div>
  );
};

export default Feedback;
