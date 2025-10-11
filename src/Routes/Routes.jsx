import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";

import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import Installed from "../pages/Installed/Installed";
import Details from "../pages/Details/Details";
import NotFound from "../pages/NotFound/NotFound";





 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
        {
            index:true,
            loader:()=>fetch('/AppData.json'),
            path:"/",
            Component:Home
        },{
          
          path:"/AllApps",
          Component:AllApps,
          loader:()=>fetch('/AppData.json')
        },
        {
          path:"/Installed",
          Component:Installed,
          loader:()=>fetch('/AppData.json')
        },{
          path:"/Details/:id",
          Component:Details,
          errorElement:<NotFound></NotFound>,
          loader:()=>fetch('/AppData.json'),
        },{
          path:"/not-found",
          Component: NotFound
        }
    ]
  },
]);