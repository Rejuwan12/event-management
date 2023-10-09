import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import SingleCard from "../pages/SingleCardShow/SingleCard";
import PrivateRoute from "../PriveteRoute/PrivateRoute";
import ErrorPage from "../components/Error/ErrorPage";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/> ,
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
          element: <About/>
        },
        {
          path: '/contact',
          element:<PrivateRoute><Contact/></PrivateRoute>
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