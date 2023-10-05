import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";





const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log( name,photo,email, password);


        // create user
        createUser(email, password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.error(error);
        })

      };


    return (
        <div>
            <Navbar></Navbar>
      <div className="space-y-5">
        <h2 className="text-3xl text-center mt-7">Please Register</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-2/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
              className="input input-bordered"
              required
            />
            {/* <label className="label">
              <a href="#" className="text-base link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="mt-6 flex justify-center">
            <button className="btn px-8 py-3 bg-[#d72050] text-white rounded-md hover:bg-sky-600">
              Register
            </button>
          </div>
        </form>
        <p className="mt-6 pb-6 flex justify-center font-sans text-lg font-light leading-normal text-inherit antialiased">
          Already have an account?
          <Link
            className="ml-1 block font-sans text-lg font-bold leading-normal text-pink-500 antialiased"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
        </div>
    );
};

export default Register;