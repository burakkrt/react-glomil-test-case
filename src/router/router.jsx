import {createBrowserRouter} from "react-router-dom";

// Pages
import MainLayout from "../pages/MainLayout.jsx";
import NotFound404 from "../pages/error/NotFound404.jsx";
import HomePageLayout from '../pages/home'

export const router = createBrowserRouter([
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
  }
])

// const authMap = router => router.map(route => {
//   if(route?.auth){
//     route.element =
//   }
// })