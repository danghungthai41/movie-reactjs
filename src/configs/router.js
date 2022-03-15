import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import User from "../Pages/User";
import DashBoard from "../Pages/Admin/DashBoard/DashBoard";
import CheckOut from "../Pages/CheckOut/CheckOut";
import UserInfo from "../Pages/UserInfo/UserInfo";
import AdminTemplate from "../Templates/AdminTemplate/AdminTemplate";
import ShowTimeAdmin from "../Pages/Admin/ShowTimeAdmin.jsx/ShowTimeAdmin";
import Users from "../Pages/Admin/Users/Users";
import Films from "../Pages/Admin/Films/Films";
import AddNew from "../Pages/Admin/AddNew/AddNew";

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
  // {
  //   path: "/checkout/:maLichChieu",
  //   exact: true,
  //   component: CheckOut,
  // }

];

const adminRouter = [
 
  {
    path: "/dashboard/users",
    axact: false,
    component: <Users/>,
  },
  {
    path: "/dashboard/showtimeadmin",
    axact: false,
    component: <ShowTimeAdmin/>,
  },
  {
    path: "/dashboard/films",
    axact: false,
    component: <Films/>,
  },
  {
    path: "/dashboard/addnew",
    axact: false,
    component: <AddNew/>,
  },
  {
    path: "/dashboard",
    axact: false,
    component: <DashBoard/>,
  },
];
export { mainRouter, loginRouter, adminRouter };
