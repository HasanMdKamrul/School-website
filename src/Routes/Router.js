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
        path: "/",
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
    ],
  },
]);

export default router;
