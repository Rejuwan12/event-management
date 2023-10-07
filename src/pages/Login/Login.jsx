import { Link } from "react-router-dom";
import google from "../../../public/google.png"

const Login = () => {
  return (
    <div className="hero mt-[100px]">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login Now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-info">Login
              </button> 
              <p className="text-center mt-2 mb-2">Don't have an account ? <Link className="text-teal-700" to="/register">Sign Up</Link></p>
               <div>
                <hr /> 
                <p className="text-center mt-2">Login With Google</p>
                <img className="w-[50px] ml-[100px] " src={google} alt="" />
               </div>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
