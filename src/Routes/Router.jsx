import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Layouts/Home";
import Allfoods from "../Pages/Allfoods/Allfoods";
import Fooddetails from "../Pages/Allfoods/Fooddetails";

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
  },
{
  path:'/detailfood/:id',
  element:<Fooddetails></Fooddetails>,
  loader:({params})=>fetch(`http://localhost:5000/allcuisin/${params.id}`)
}]
  },
]);
export default router