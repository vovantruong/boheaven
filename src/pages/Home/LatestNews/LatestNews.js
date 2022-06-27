import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./LatestNews.module.scss";
import Button from "~/components/Button/Button";
import InfoBox, {
  InfoHead,
  InfoTag,
  InfoBody,
  InfoLinkMore,
} from "~/components/InfoBox/InfoBox";

const cx = classNames.bind(styles);

const data = [
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
  {
    title: "娛樂城反水是什麼、有哪些種類？娛樂城獎勵一次看!",
    date: "2022-03-03 14:00:00",
    description:
      "娛樂城經常向他們的玩家提供娛樂城反水，以鼓勵他們繼續在那裡博弈、或是獎勵他們的忠誠度...",
    link: "#",
  },
];

const LatestNews = () => {
  const [loadMore, setLoadMore] = useState(2);

  const handleLoadMore = () => {
    if(data.length >= loadMore){

      setLoadMore(loadMore + 2)
    }else{
      alert('No data')
    }
  }
  return (
    <div className={cx("latest-news")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("list-news")}>
            {data.map((item, i) => (
              i+1 <= loadMore ?
              <InfoBox key={i} className={cx("news-item")}>
                <InfoHead>{item.title}</InfoHead>
                <InfoTag>{item.date}</InfoTag>
                <InfoBody>{item.description}</InfoBody>
                <InfoLinkMore to={item.link}>{"更多詳情>>"}</InfoLinkMore>
              </InfoBox>
              : null
            ))}
          </div>
          <Button onClick={handleLoadMore} active className={cx("btn-more")}>
            看更多
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
