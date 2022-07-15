// path name ----------------------------------------------------------------------------
import { configRoutes } from "../config/Routes";

// layout -------------------------------------------------------------------------------
import DefaultLayout from "~/Layout/DefaultLayout/DefaultLayout"; // Header & Footer
import NormalLayout from "~/Layout/NormalLayout/NormalLayout"; // No Header & Footer

// routes page to navbar menu -----------------------------------------------------------
import Home from "~/pages/Home/Home";

// routes authencation ------------------------------------------------------------------
import Login from "~/pages/Auth/Login/Login";
import Register from "~/pages/Auth/Register/Register";

import Blogsport from "~/pages/Blogsport/Blogsport";
import GameIntroduction from "~/pages/GameIntroduction/GameIntroduction";
import Discount from "~/pages/Discount/Discount";
import AllBet from "~/pages/GameIntroduction/AllBet/AllBet";
import DreamGame from "~/pages/GameIntroduction/DreamGame/DreamGame";
import WM from "~/pages/GameIntroduction/WM/WM";
import SAgaming from "~/pages/GameIntroduction/SAgaming/SAgaming";
import OB from "~/pages/GameIntroduction/OB/OB";
import BetSport from "~/pages/GameIntroduction/BetSport/BetSport";
import Super from "~/pages/GameIntroduction/Super/Super";
import SuperG from "~/pages/GameIntroduction/SuperG/SuperG";
import Lottery from "~/pages/GameIntroduction/Lottery/Lottery";
import DreamTech from "~/pages/GameIntroduction/DreamTech/DreamTech";
import BNG from "~/pages/GameIntroduction/BNG/BNG";

// routes profile -----------------------------------------------------------------------
import Profile from "~/pages/Profile/Profile";
// children route profile
import PersonalInformation from "~/pages/Profile/PersonalInformation/PersonalInformation";
import VipPrivileges from "~/pages/Profile/VipPrivileges/VipPrivileges";
import InquiryCompliance from "~/pages/Profile/InquiryCompliance/InquiryCompliance";
import AccountManager from "~/pages/Profile/AccountManager/AccountManager";
import BettingHistory from "~/pages/Profile/BettingHistory/BettingHistory";
import HelpCenter from "~/pages/Profile/HelpCenter/HelpCenter";
import TransactionRecord from "~/pages/Profile/TransactionRecord/TransactionRecord";
import InviteFriends from "~/pages/Profile/InviteFriends/InviteFriends";
import Withdrawal from "~/pages/Profile/Withdrawal/Withdrawal";
import Deposit from "~/pages/Profile/Deposit/Deposit";
import TurningPoint from "~/pages/Profile/TurningPoint/TurningPoint";

// routes notifiation center
import NotificationCenter from "~/pages/NotificationCenter/NotificationCenter";
import StationLetter from "~/pages/NotificationCenter/StationLetter/StationLetter";
import Announcement from "~/pages/NotificationCenter/Announcement/Announcement";
import Maintenance from "~/pages/NotificationCenter/Maintenance/Maintenance";

// New route mobile ---------------------------------------------------------------------
import CustomerService from "~/pages/Mobile/CustomerService/CustomerService";



/**
 *  Parameter Object: 
 * 1. path: (address link - string)
 * 2. components: (React components)
 * 3. layout: (React conponents)
 * 4. tabHeaderMobile: (boolean)
 * 5. titlePageMobile: (string)
 * ...
 */

const publicRoutes = [
  // Home
  {
    path: configRoutes.home,
    components: Home,
    layout: DefaultLayout,
  },
  // Discount
  {
    path: configRoutes.discount,
    components: Discount,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '優惠活動'
  },
  // Login
  {
    path: configRoutes.login,
    components: Login,
    layout: NormalLayout,
  },
  // Register
  {
    path: configRoutes.register,
    components: Register,
    layout: NormalLayout,
  },
  {
    path: configRoutes.blogsport,
    components: Blogsport,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '部落格',
  },
  {
    path: configRoutes.invitefriends,
    components: InviteFriends,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '邀請好友',
  },
  {
    path: configRoutes.gameIntroduction,
    components: GameIntroduction,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.allbet,
    components: AllBet,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.dreamgame,
    components: DreamGame,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.sagaming,
    components: SAgaming,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.wm,
    components: WM,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.ob,
    components: OB,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.betsport,
    components: BetSport,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.super,
    components: Super,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.superg,
    components: SuperG,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.lottery,
    components: Lottery,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.dreamtech,
    components: DreamTech,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.bng,
    components: BNG,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '遊戲介紹'
  },
  {
    path: configRoutes.profile,
    components: Profile,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: "我的",
    children: [
      {
        path: "personal-information",
        components: PersonalInformation
      },
      {
        path: "vip-privileges",
        components: VipPrivileges
      },
      {
        path: "account-manager",
        components: AccountManager
      },
      {
        path: "betting-history",
        components: BettingHistory
      },
      {
        path: "help-center",
        components: HelpCenter
      },
      {
        path: "inquiry-compliance",
        components: InquiryCompliance
      },
      {
        path: "transaction-record",
        components: TransactionRecord
      },
      {
        path: "deposit",
        components: Deposit
      },
      {
        path: "withdrawal",
        components: Withdrawal
      },
      {
        path: "turning-point",
        components: TurningPoint
      },
    ]
  },
  {
    path: configRoutes.customerService,
    components: CustomerService,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: '客服中心',
  },
  {
    path: configRoutes.notificationCenter,
    components: NotificationCenter,
    layout: DefaultLayout,
    tabHeaderMobile: false,
    titlePageMobile: "通知中心",
    children: [
      {
        path: "station-letter",
        components: StationLetter
      },
      {
        path: "announcement",
        components: Announcement,
      },
      {
        path: "maintenance",
        components: Maintenance
      }
    ]
  }
];

export { publicRoutes };
