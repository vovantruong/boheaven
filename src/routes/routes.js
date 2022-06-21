// path name ----------------------------------------------------------------------------
import { configRoutes } from "../config/Routes";

// layout -------------------------------------------------------------------------------
import DefaultLayout from "~/Layout/DefaultLayout/DefaultLayout"; // Header & Footer
import NormalLayout from "~/Layout/NormalLayout/NormalLayout"; // No Header & Footer

// routes page to navbar menu -----------------------------------------------------------
import Home from "~/pages/Home/Home";
import Bingo from "~/pages/Bingo/Bingo";
import ChessAndCards from "~/pages/ChessAndCards/ChessAndCards";
import Discount from "~/pages/Discount/Discount";
import Electronic from "~/pages/Electronic/Electronic";
import Fishing from "~/pages/Fishing/Fishing";
import PhysicalEducation from "~/pages/PhysicalEducation/PhysicalEducation";
import RealPerson from "~/pages/RealPerson/RealPerson";

// routes authencation ------------------------------------------------------------------
import Login from "~/pages/Auth/Login/Login";
import Register from "~/pages/Auth/Register/Register";

const publicRoutes = [
  // Home
  {
    path: configRoutes.home,
    components: Home,
    layout: DefaultLayout,
  },
  // Bingo
  {
    path: configRoutes.bingo,
    components: Bingo,
    layout: DefaultLayout,
  },
  // Chess And Cards
  {
    path: configRoutes.chessAndCards,
    components: ChessAndCards,
    layout: DefaultLayout,
  },
  // Discount
  {
    path: configRoutes.discount,
    components: Discount,
    layout: DefaultLayout,
  },
  //Electronic
  {
    path: configRoutes.electronic,
    components: Electronic,
    layout: DefaultLayout,
  },
  // Fishing
  {
    path: configRoutes.fishing,
    components: Fishing,
    layout: DefaultLayout,
  },
  // Physical Education
  {
    path: configRoutes.physicalEducation,
    components: PhysicalEducation,
    layout: DefaultLayout,
  },
  //Real Person
  {
    path: configRoutes.realPerson,
    components: RealPerson,
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
];

export { publicRoutes };
