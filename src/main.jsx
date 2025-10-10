import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Banner from './components/Banner/Banner.jsx';
import Manage from './components/Manage/Manage.jsx';
import Unseen from './components/Unseen/Unseen.jsx';
import Caring from './components/Caring/Caring.jsx';
import Desing2 from './components/Design2/Desing2.jsx';
import Design from './components/Design/Design.jsx';
import Footer from './components/Footer/Footer.jsx';


const router = createBrowserRouter([
   {
    path: "/",
    Component: MainRoot,
    children: [
      {path: "/banner", Component: Banner},
      {path: "/desi", Component: Design},
      {path: "/manage", Component: Manage},
      {path: "/unseen", Component: Unseen},
      {path: "/design", Component: Desing2},
      {path: "/caring", Component: Caring},
      {path: "/footer", Component: Footer},
    ]
   }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
