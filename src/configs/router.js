import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import User from "../Pages/User";
import DashBoard from "../Pages/DashBoard/DashBoard";
import CheckOut from "../Pages/CheckOut/CheckOut";
import InfoUser from "../Pages/InfoUser";

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
    path: "/info",
    exact: false,
    component: InfoUser,
  },
  {
    path: "/home",
    exact: false,
    component: Home,
  },
  {
    path: "/dashboard",
    exact: false,
    component: DashBoard,
  },
  {
    path: "/adduser",
    exact: false,
    component: User,
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
];
const loginRouter = [
  {
    path: "/checkout/:maLichChieu",
    axact: false,
    component: CheckOut,
  },
  {
    path: "/info",
    exact: false,
    component: InfoUser,
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
