import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./PersonalInformation.module.scss";
import { dataUser } from "~/constants/mocks/dataAccountUser";
import InputText from "~/components/InputText/InputText";
import BoxInforProfile from "~/components/BoxInfoProfile/BoxInforProfile";
import ShowModalSupport from "~/Layout/DefaultLayout/SidebarSupport/ShowModalSupport";

const cx = classNames.bind(styles);

const PersonalInformation = () => {
  const [lineId, setLineId] = useState("");
  const [visible, setVisible] = useState(false);

  function EnCode(string="", start=0, end=0){
    let t = "";
    for(let i = 0; i < string.length; i++){
      if(!start && !end){
        t += "*" 
      }else if(i > start && !end){
        t += "*"
      }
      else if(i > start && i < end){
        t += "*"
      }else{
        t += string[i]
      }
    }
    return t;
  }

  
  return (
    <>
      <div className={cx("personal-information")}>
        <BoxInforProfile titleHead="基本資料" lineHead>
          <div className={cx("asic-info", "wrapper")}>
            <div className={cx("member")}>
              <p>用戶名:</p>
              <span>{dataUser.member}</span>
            </div>
            <div className={cx("name")}>
              <p>真實姓名:</p>
              <span>
                {dataUser.name}
                <span className={cx("notes")}>
                  姓名需與銀行帳戶人姓名一致，否則無法提款，如需更改請
                  <button onClick={() => setVisible(true)}>聯繫客服</button>
                </span>
              </span>
            </div>
            <div className={cx("gender")}>
              <p>性別:</p>
              <span>{dataUser.gender}</span>
            </div>
            <div className={cx("vip")}>
              <p>VIP特權:</p>
              <span>{dataUser.vip}</span>
            </div>
            <div className={cx("lineId")}>
              <p>LINE ID:</p>
              <InputText
                value={lineId}
                wrapClassName={cx("input")}
                onChange={(e) => setLineId(e.target.value)}
                placeholder="請輸入 LINE ID"
              />
            </div>
          </div>
        </BoxInforProfile>
        <BoxInforProfile titleHead="帳號安全" lineHead>
          <div className={cx("account-safety", "wrapper")}>
            <div className={cx("phone")}>
              <p>手機號碼:</p>
              <span>{EnCode(dataUser.phone,3,8)}</span>
              <span>{dataUser.verifyphone}</span>
            </div>
            <div className={cx("password")}>
              <p>更改密碼:</p>
              <span>{EnCode(dataUser.password)}</span>
              <button>編輯</button>
            </div>
          </div>
        </BoxInforProfile>
      </div>
      <ShowModalSupport visible={visible} setVisible={setVisible} />
    </>
  );
};

export default PersonalInformation;
