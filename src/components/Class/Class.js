import {
  AcademicCapIcon,
  CurrencyEuroIcon,
  ForwardIcon
} from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const Class = ({
  classItem: { courseName, TeacherName, picture, price, _id },
}) => {
  return (
    <>
      <Link to={`/class/${_id}`}>
        <div className="overflow-hidden transition-shadow duration-300 bg-white  shadow-2xl p-3 rounded-2xl">
          <img
            src={picture}
            className="object-cover w-full h-64 rounded"
            alt=""
          />

          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>

            <p className="text-2xl font-bold leading-5">
              <span className="flex">
                <AcademicCapIcon className="h-6 w-6 mr-1" />
                {courseName}
              </span>
            </p>

            <p className="mb-4 text-gray-700">
              <span className="flex">
                <ForwardIcon className="w-6 h-6 text-blue-700 mr-2" />
                {TeacherName}
              </span>
            </p>
            <div className="flex space-x-4">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                >
                  <polyline
                    points="6 23 1 23 1 12 6 12"
                    fill="none"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
              <p className="font-semibold">7.4K</p>

              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                >
                  <polyline
                    points="23 5 23 18 19 18 19 22 13 18 12 18"
                    fill="none"
                    strokeMiterlimit="10"
                  />
                  <polygon
                    points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
              <p className="font-semibold">81</p>
              <span className="flex">
                {" "}
                <CurrencyEuroIcon className="w-6 h-6 text-orange-600" />
                Price: {price}{" "}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Class;
