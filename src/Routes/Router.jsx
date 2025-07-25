import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Layouts/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[{
      path:"/",
      element:<Home></Home>,
    }]
  },
]);
export default router