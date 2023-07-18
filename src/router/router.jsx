import {createBrowserRouter} from "react-router-dom";

// Pages
import MainLayout from "../pages/MainLayout.jsx";
import NotFound404 from "../pages/error/NotFound404.jsx";
import HomePageLayout from '../pages/home'
import PrivatePageLayout from '../auth/PrivatePage.jsx'
import UserLogin from "../pages/login/user";

const router = [
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <NotFound404/>,
    children: [
      {
        index: true,
        element: <HomePageLayout/>
      }
    ]
  }, {
    path: '/user-login',
    element: <UserLogin/>
  }
]

const authMap = router => router.map(route => {
  if (route?.auth) {
    route.element = <PrivatePageLayout>{route.element}</PrivatePageLayout>
  }
  if (route?.children) {
    route.children = authMap(route.children);
  }
  return route;
})


export default createBrowserRouter(authMap(router))