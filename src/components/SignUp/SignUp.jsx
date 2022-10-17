import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import signUpAnimation from "../../assests/signup.json";
import { AuthContext } from "../Contexts/UserContext";

const SignUp = () => {

  const [error,setError] = useState(null);

  const {createUser} = useContext(AuthContext)

  const handleSubmit = event=>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(email,password,confirm);

    // ** Validation

    if (password !== confirm) {
      setError("Password don't match")
      return;
    };

    if (! /(?=.*?[A-Z])/.test(password)) {
      setError('At least one upper case');
      return;
    }
    if (! /(?=.*?[a-z])/.test(password)) {
      setError('At least one lower case');
      return;
    }
    if (! /(?=.*?[0-9])/.test(password)) {
      setError('At least one digit');
      return;
    }
    if (! /(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError('At least one special character');
      return;
    }
    if (password.length < 6) {
      setError('Please provide at least 6 charecters');
      return;
    }

    // ** user creation

    const userCreation = async ()=>{
      try {
        const result = await createUser(email,password);
        console.log("user created successfully",result.user);
        form.reset();
      } catch (error) {
        console.log(error);
        setError(error)
      }
    };

    userCreation();

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
                      Sign up
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Sign up and get our newest news.</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-2">
                
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                  required
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
                  required
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                  />
                  <input
                    type="password"
                    name="confirm"
                    id="confirm"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="confirm your password"
                  />
                
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <button
                    type="submit"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                  >
                    <svg
                      className="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign in with Google
                  </button>

                  <Link
                    to="/login"
                    type="button"
                    className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                  >
                    {" "}
                    Already have an account?{" "}
                  </Link>
                </div>
              </form>
            </div>
            <div className="order-first hidden w-full lg:block">
              <Lottie animationData={signUpAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
