import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import SingleCard from "../pages/SingleCardShow/SingleCard";
import PrivateRoute from "../PriveteRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>,
            loader:() => fetch('/health.json')
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
          element: <PrivateRoute><Blog/></PrivateRoute>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
        path: '/cards/:id',
        element: <PrivateRoute><SingleCard/></PrivateRoute>,
        loader: () => fetch('/health.json')
        }
      ]
    },
  ]);
  export default router