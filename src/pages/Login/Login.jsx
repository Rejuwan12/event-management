import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../../public/google.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {

  const {logInUser, signInGoogle} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation()

  const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value 
    
    console.log(email, password);

    logInUser(email, password)
    .then(result => {
      console.log(result.user)
      e.target.reset();
      Swal.fire(
      'login Successfully!',
     'Congratulations!',
     'success')
      navigate( location?.state ? location.state : '/');
    })
    .catch(error => {console.error(error)
      Swal.fire(
        'Mistake!',
       'Please Type a Right Email & Password!',
       'question')

    })
  }
  const handleGoogle = () => {
    signInGoogle()
    .then(result => {
      console.log(result.user);
     
      navigate('/');
    })
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <div className="hero">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login Now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
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
              
                <img onClick={handleGoogle} className="w-[50px] ml-[100px] cursor-pointer " src={google} alt="" />
                
               </div>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
