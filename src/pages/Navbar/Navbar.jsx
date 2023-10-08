import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("loged out"))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog">
          <a>Blog</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <a>About Us</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          <a>Contact Us</a>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#5595a79c] rounded-t-lg font-medium">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Health Fairs</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            
            <div className="flex items-center gap-3">
            <img className="rounded-full w-[44px]" src={user.photoURL} alt="" />
            <span className="mr-2">{user.displayName}</span>
            </div>
            <button onClick={handleLogOut} className="btn btn-sm">
              LogOut
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
