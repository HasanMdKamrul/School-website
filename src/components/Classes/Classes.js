import React from "react";
import { useLoaderData } from "react-router-dom";
import Class from "../Class/Class";

const Classes = () => {
  const classes = useLoaderData();
  
  return (
    <>
      <h1 className="flex justify-center my-5 text-5xl font-extrabold">
        Explore Our Wide Range of classes
      </h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
            classes.map(classItem=> <Class key={classItem._id} classItem={classItem}/>)
        }
        </div>
      </div>
    </>
  );
};

export default Classes;
