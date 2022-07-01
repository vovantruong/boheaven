// path name ----------------------------------------------------------------------------
import { configRoutes } from "../config/Routes";

// layout -------------------------------------------------------------------------------
import DefaultLayout from "~/Layout/DefaultLayout/DefaultLayout"; // Header & Footer
import NormalLayout from "~/Layout/NormalLayout/NormalLayout"; // No Header & Footer
import MobileTabLayout from "~/Layout/MobileTabLayout/MobileTabLayout";

// routes page to navbar menu -----------------------------------------------------------
import Home from "~/pages/Home/Home";

// routes authencation ------------------------------------------------------------------
import Login from "~/pages/Auth/Login/Login";
import Register from "~/pages/Auth/Register/Register";

import Blogsport from "~/pages/Blogsport/Blogsport";
import Invitefriends from "~/pages/Invitefriends/Invitefriends";
import GameIntroduction from "~/pages/GameIntroduction/GameIntroduction";
import Discount from "~/pages/Discount/Discount";

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
  },
  {
    path: configRoutes.invitefriends,
    components: Invitefriends,
    layout: DefaultLayout,
    layoutMobile: MobileTabLayout,
    nameLayoutMobile: '邀請好友',
  },
  {
    path: configRoutes.gameIntroduction,
    components: GameIntroduction,
    layout: DefaultLayout,
  },
];

export { publicRoutes };
