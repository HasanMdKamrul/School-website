import Lottie from "lottie-react";
import React from "react";
import { useRouteError } from "react-router-dom";
import errorAnimation from "../../assests/error.json";

const ErrorPage = () => {
    const error = useRouteError();
    const {status, statusText, message} = useRouteError();
   
  return (
    <div>
      <div className="h-96 w-96 container mx-auto">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <div>
        {
            error && (
                <div>
                    <h1 className="text-red-700 font-semibold text-center text-5xl">{statusText || message}</h1>
                    <h1 className="text-blue-700 font-semibold text-center text-2xl">{status}</h1>
                </div>
            )
        }
      </div>
    </div>
  );
};

export default ErrorPage;
