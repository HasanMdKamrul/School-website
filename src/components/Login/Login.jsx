import Lottie from 'lottie-react';
import React from "react";
import signUpAnimation from '../../assests/signup.json';

const Login = () => {
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

              <div className="mt-6 space-y-2">
                <div>
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
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Sign Up
                  </button>

                  <a
                    href="/"
                    type="button"
                    className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                  >
                    {" "}
                    Forgot your Password?{" "}
                  </a>
                </div>
              </div>
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

export default Login;
