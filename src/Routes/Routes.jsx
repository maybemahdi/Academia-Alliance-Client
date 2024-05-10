import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import CreateAssignment from "../Pages/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Assignments from "../Pages/Assignments";
import UpdatedAssignment from "../Pages/UpdatedAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/update-assignment/:id",
        element: <UpdatedAssignment />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
      },
      {
        path: "/assignment-details/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
      },
    ],
  },
]);
