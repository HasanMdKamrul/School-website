import Lottie from 'lottie-react';
import React from "react";
import { Link } from 'react-router-dom';
import abcdAnimation from '../../assests/homeAnimation.json';

const Home = () => {
  return (
    <>
         <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl mb-24">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              My School
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The Smarter Way to Learn Anything
            <br className="hidden md:block" />
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
        </div>
        <div className="flex items-center text-blue-500">
          <input className="border px-5 py-3 border-amber-400 shadow-xl mr-5  rounded-lg" type="text" placeholder="Search Class" />
          <Link
            to="/classes"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Buy Course
          </Link>
        </div>
      </div>
      <div>
        {/* **animation */}
        <Lottie animationData={abcdAnimation} loop={true} />
      </div>
    </div>
    </>
   
  );
};

export default Home;
