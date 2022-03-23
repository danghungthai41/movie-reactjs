import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
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
    path: "/info",
    exact: true,
    component: UserInfo,
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
];

export { mainRouter };
