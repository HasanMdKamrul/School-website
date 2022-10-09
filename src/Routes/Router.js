import ClassDetails from "../components/ClassDetails/ClassDetails";
import Classes from "../components/Classes/Classes";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
            <Classes />
          </>
        ),
        loader: () => fetch(`classes.json`),
      },
      {
        path: '/home',
        element: (
          <>
            <Home />
            <Classes />
          </>
        ),
        loader: () => fetch(`classes.json`),
      },
      {
        path: "/classes",
        element: <Classes />,
        loader: () => fetch(`classes.json`),
      },
      {
        path: "/class/:classId",
        element: <ClassDetails/>,
       loader: ({params})=> fetch(`class/${params.classId}.json`)
      },
    ],
  },
]);

export default router;
