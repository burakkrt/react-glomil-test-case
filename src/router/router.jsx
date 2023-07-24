import {createBrowserRouter} from "react-router-dom";

// Pages
import MainLayout from "../pages/MainLayout.jsx";
import NotFound404 from "../pages/error/NotFound404.jsx";
import HomePageLayout from '../pages/home'
import PrivatePageLayout from '../auth/PrivatePage.jsx'
import UserLogin from "../pages/login/user";
import ServicesLayout from "../pages/services";
import ServicesWelcome from "../pages/services/welcome"
import Sentiment from "../pages/services/text-analysis/sentiment";
import TextAnalysisLayout from "../pages/services/text-analysis/";
import TextAnalysis from "../pages/services/text-analysis/welcome"
import Bots from '../pages/services/bots'

export const router = [
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <NotFound404/>,
    breadcrumb: "Anasayfa",
    children: [
      {
        index: true,
        element: <HomePageLayout/>,
      }, {
        path: '/services',
        element: <ServicesLayout/>,
        breadcrumb: "Hizmetler",
        children: [
          {
            index: true,
            element: <ServicesWelcome/>
          },
          {
            path: 'text-analysis',
            element: <TextAnalysisLayout/>,
            breadcrumb: "Text Analysis",
            children: [
              {
                index: true,
                element: <TextAnalysis/>
              },
              {
                path: 'sentiment',
                element: <Sentiment/>,
                breadcrumb: "Sentiment",
              }
            ]
          }, {
            path: 'bots',
            element: <Bots/>,
            breadcrumb: "Bots"
          }
        ]
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