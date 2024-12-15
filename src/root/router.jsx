import { createBrowserRouter } from "react-router-dom";
import { MainLeyout, AuthLeyout, Login, Signup } from ".";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLeyout />,
    children: [
      {
        path: "/",
        element: <h2>home</h2>,
      },
      {
        path: "auth",
        element: <AuthLeyout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);

export default router;
