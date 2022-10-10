import ClassDetails from "../components/ClassDetails/ClassDetails";
import Classes from "../components/Classes/Classes";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import Main from "../layouts/Main";

const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: ()=> fetch(`/classes.json`),
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
            path: "/classes",
            element: <Classes />,
          },
          {
            path: "/class/:classId",
            element: <ClassDetails />,
            loader: ({ params }) => fetch(`/class/course_${params.classId}.json`),
          },
          {
            path:'/orders',
            element: <OrderSummary/>
          }
        ],
      }
    ],
  },
]);

export default router;
