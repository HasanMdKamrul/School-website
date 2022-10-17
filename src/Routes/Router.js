import ClassDetails from "../components/ClassDetails/ClassDetails";
import Classes from "../components/Classes/Classes";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layouts/Main";
import { getProductsAndStoredCart } from "../loaders/getProductsAndStoredCart";

const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: getProductsAndStoredCart,
    errorElement: <ErrorPage />,
    children: [
      {
          errorElement:<ErrorPage/>,
          children: [
            {
              index: true,
              element: <Home/>,
            },
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/signup",
              element: <SignUp/>
            },
            {
              path: "/login",
              element: <Login/>
            },
            {
              path: "/classes",
              element: <PrivateRoute> <Classes /></PrivateRoute>
            },
            {
              path: "/class/:classId",
              element: <PrivateRoute><ClassDetails /></PrivateRoute> ,
              loader: ({ params }) => fetch(`/class/course_${params.classId}.json`),
            },
            {
              path:'/orders',
              element: <PrivateRoute><OrderSummary/></PrivateRoute>
            }
          ],
      }
     
    ],
  },
]);

export default router;
