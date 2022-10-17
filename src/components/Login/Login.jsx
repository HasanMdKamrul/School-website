import Lottie from "lottie-react";
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logInAnimation from '../../assests/login.json';
import { AuthContext } from "../Contexts/UserContext";

const Login = () => {

    const [error,setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname ;

    const {logIn} = useContext(AuthContext);
    
  const handleSubmit = event=>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
    console.log(email,password);

    // ** login

    const logInUser = async()=>{
        try {
           await logIn(email,password);
            setError("Logged In");
            form.reset();
            // ** redirect to the page

            navigate(from || '/', {replace: true});


        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
    logInUser()

  }

  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto  lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3 border my-5 rounded-2xl shadow-lg  ">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="  text-neutral-600 eading-6 lg:text-4xl">
                        Log In
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Please log in to view the full content.</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-2">
                
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your email"
                  />
                
                
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                  />
                  
                
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <button
                    type="submit"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Log In
                  </button>
                 

                  <Link
                    to="/signup"
                    type="button"
                    className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                  >
                    {" "}
                    Don't have an account?{" "}
                  </Link>
                  {
                    error && <span className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm">
                        {error}
                    </span>
                  }
                </div>
              </form>
            </div>
            <div className="order-first hidden w-full lg:block">
              <Lottie animationData={logInAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;