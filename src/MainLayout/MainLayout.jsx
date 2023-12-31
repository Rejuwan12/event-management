import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from '../pages/Footer/Footer'


const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto bg-[#5595a79c]">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;