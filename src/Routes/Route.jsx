import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/blog',
          element: <Blog/>
        },
        {
          path:'/about',
          element:<About/>
        }
      ]
    },
  ]);
  export default router