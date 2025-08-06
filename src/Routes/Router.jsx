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
import Addfoods from "../Pages/Allfoods/Addfoods";
import Purchase from "../Pages/Cartrelated/Purchase";
import Myfoods from "../Pages/Myfoods/Myfoods";
import Updatefood from "../Pages/Myfoods/Updatefood";
import Foodgallery from "../Pages/Foodgallery/Foodgallery";
import Userprofile from "../Pages/Userprofile/Userprofile";
import Editprofile from "../Pages/Userprofile/Editprofile";


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
},
{
  path:'/addfood',
  element:<Privateroute><Addfoods></Addfoods></Privateroute> 
},
{
  path:'/purchase',
  element:<Privateroute><Purchase></Purchase></Privateroute> 
},
{
  path:'/myfoods',
  element:<Privateroute><Myfoods></Myfoods></Privateroute> 
},
{
  path:'/updatefood/:id',
  element:<Updatefood></Updatefood>,
   loader:({params})=>fetch(`http://localhost:5000/allcuisin/${params.id}`)
},
{
  path:'/foodgallery',
  element:<Foodgallery></Foodgallery>
},
{
  path:'/userprofile',
  element:<Userprofile></Userprofile>
},
{
  path:'/editprofile',
  element:<Editprofile></Editprofile>
}
]},
]);
export default router