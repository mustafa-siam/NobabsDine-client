import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Layouts/Home";
import Allfoods from "../Pages/Allfoods/Allfoods";
import Fooddetails from "../Pages/Allfoods/Fooddetails";
import Viewcart from "../Pages/Cartrelated/Viewcart";
import Login from "../Accounts/Login";
import Register from "../Accounts/Register";
import Privateroute from "../Privateroutes/Privateroute";


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
  element:<Privateroute><Fooddetails></Fooddetails></Privateroute>,
  loader:({params})=>fetch(`http://localhost:5000/allcuisin/${params.id}`)
},
{
  path:'/viewcart',
  element:<Privateroute><Viewcart></Viewcart></Privateroute> 
},
{
  path:'/login',
  element:<Login></Login>
},
{
path:'/register',
element:<Register></Register>
}
]},
]);
export default router