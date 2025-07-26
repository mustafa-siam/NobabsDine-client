import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Layouts/Home";
import Allfoods from "../Pages/Allfoods/Allfoods";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[{
      path:"/",
      element:<Home></Home>,
    },
  {
    path:'/allfoods',
    element:<Allfoods></Allfoods>
  }]
  },
]);
export default router