import React, { useState, } from "react";
import classNames from "classnames/bind";
import styles from "./GameLobby.module.scss";
import Bingo from "./Bingo/Bingo";
import ChessAndCards from "./ChessAndCards/ChessAndCards";
import Electronic from "./Electronic/Electronic";
import Fishing from "./Fishing/Fishing";
import PhysicalEducation from "./PhysicalEducation/PhysicalEducation";
import RealPerson from "./RealPerson/RealPerson";
import { GAMELOBBY } from "~/constants/imageHomePage";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

const dataTab = [
  {
    name: "真人",
    icon: GAMELOBBY.IconRealPerSon,
    iconActive: GAMELOBBY.IconRealPerSonActive,
    components: <RealPerson />,
  },
  {
    name: "體育",
    icon: GAMELOBBY.IconPhysical,
    iconActive: GAMELOBBY.IconPhysicalActive,
    components: <PhysicalEducation />,
  },
  {
    name: "賓果",
    icon: GAMELOBBY.IconBingo,
    iconActive: GAMELOBBY.IconBingoActive,
    components: <Bingo />,
  },
  {
    name: "電子",
    icon: GAMELOBBY.IconElectronic,
    iconActive: GAMELOBBY.IconElectronicActive,
    components: <Electronic />,
  },
  {
    name: "棋牌",
    icon: GAMELOBBY.IconChess,
    iconActive: GAMELOBBY.IconChessActive,
    components: <ChessAndCards />,
  },
  {
    name: "捕魚",
    icon: GAMELOBBY.IconFishing,
    iconActive: GAMELOBBY.IconFishingActive,
    components: <Fishing />,
  },
];

const GameLobby = () => {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState(dataTab[0].components);
  return (
      <div className={cx("game-lobby")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("tab-menu")}>
            {dataTab.map((item, i) => (
              <Button
              key={i}
                className={cx("tab-action", active === i ? 'active' : '')}
                active={active === i ? true : false}
                onClick={() => {
                  setActive(i);
                  setTab(item.components);
                }}
              >
                <img src={active === i ? item.iconActive : item.icon} />
                {item.name}
              </Button>
            ))}
          </div>
          <div className={cx("tab-body")}>{tab}</div>
        </div>
      </div>
    </div>
  );
};

export default GameLobby;
