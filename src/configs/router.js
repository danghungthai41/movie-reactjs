import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import User from "../Pages/User";
import DashBoard from "../Pages/DashBoard/DashBoard";
import CheckOut from "../Pages/CheckOut/CheckOut";
import UserInfo from "../Pages/UserInfo/UserInfo";

const mainRouter = [
  {
    path: "/signin",
    exact: false,
    component: SignIn,
  },
  {
    path: "/signup",
    exact: false,
    component: SignUp,
  },
  {
    path: "/detail/:movieCode",
    exact: false,
    component: Detail,
  },
  {
    path: "/home",
    exact: false,
    component: Home,
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
];
const loginRouter = [
  {
    path: "/info",
    exact: true,
    component: UserInfo,
  },
  {
    path: "/checkout/:maLichChieu",
    axact: false,
    component: CheckOut,
  },
];

const adminRouter = [
  {
    path: "/dashboard",
    axact: true,
    component: DashBoard,
  },
];
export { mainRouter, loginRouter, adminRouter };
