import { createBrowserRouter } from "react-router-dom";
import { MainLeyout, AuthLeyout, Login, Signup, Home } from ".";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLeyout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "jobs",
        element: <h2>all jobs</h2>,
      },
      {
        path: "add-new-job",
        element: <h2>add new job</h2>,
      },
      {
        path: "my-app",
        element: <h2>my appp</h2>,
      },
      {
        path: "my-job-post",
        element: <h2>my Job post</h2>,
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
