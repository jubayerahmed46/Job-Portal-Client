import { createBrowserRouter } from "react-router-dom";
import {
  MainLeyout,
  AuthLeyout,
  Login,
  Signup,
  Home,
  ProtectedRoute,
  Details,
  MyApplications,
  PrivetRoute,
} from ".";

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
        element: (
          <PrivetRoute>
            <MyApplications />
          </PrivetRoute>
        ),
      },
      {
        path: "my-job-post",
        element: <h2>my Job post</h2>,
      },
      {
        path: "job/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/details/${params.id}`),
        element: (
          <PrivetRoute>
            <Details />
          </PrivetRoute>
        ),
      },
      {
        path: "auth",
        element: (
          <ProtectedRoute>
            <AuthLeyout />
          </ProtectedRoute>
        ),
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
