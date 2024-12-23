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
  AddJob,
  MyJobPosts,
  ViewApplications,
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
        element: (
          <PrivetRoute>
            <AddJob />
          </PrivetRoute>
        ),
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
        path: "my-job-post/view-applications/:job_id",
        element: (
          <PrivetRoute>
            <ViewApplications />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-blond.vercel.app/job/view-applications/${params.job_id}`
          ),
      },
      {
        path: "my-job-post",
        element: <MyJobPosts />,
      },
      {
        path: "job/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-blond.vercel.app/jobs/details/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <Details />
          </PrivetRoute>
        ),
      },
      {
        path: "auth",
        element: (
          // <ProtectedRoute>
          <AuthLeyout />
          // </ProtectedRoute>
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
