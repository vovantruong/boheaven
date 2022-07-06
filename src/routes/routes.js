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
import Invitefriends from "~/pages/Invitefriends/Invitefriends";
import GameIntroduction from "~/pages/GameIntroduction/GameIntroduction";
import Discount from "~/pages/Discount/Discount";
import AllBet from "~/pages/GameIntroduction/AllBet/AllBet";

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
    components: Invitefriends,
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
];

export { publicRoutes };
