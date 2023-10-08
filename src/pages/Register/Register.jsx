import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {

  const {createUser}= useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignUp = e => {
    e.preventDefault()
    const name = e.target.name.value 
    const email = e.target.email.value 
    const password = e.target.password.value 
    console.log(name, email, password);

    createUser(email, password)
    .then(result => {
      console.log(result.user);
      navigate('/login')
      Swal.fire(
        'Register Successfully!',
       'Please Login!',
       'success')
    })
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <div className="hero mt-[100px]">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Please Sign Up</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-info">Sign Up</button>
              <p className="text-center mt-2">
                Already have an account ?{" "}
                <Link className="text-teal-700" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
