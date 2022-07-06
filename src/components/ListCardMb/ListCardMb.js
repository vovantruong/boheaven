import React from "react";
import styles from "./ListCardMb.module.scss";
import classNames from "classnames/bind";
import CardGameMB from "~/components/CardGameMb/CardGameMb";

const cx = classNames.bind(styles);

const ListCardMb = ({data, className, onClick, ...props}) => {

  return (
    <ul className={cx("list-game", data.length > 3 ? "col-2" : "", className)}>
      {data.map((item, i) => (
        <CardGameMB onClick={() => onClick ? onClick(item): {}} col2={data.length > 3 ? true : false} key={i} {...item} />
      ))}
    </ul>
  );
};

export default ListCardMb;
