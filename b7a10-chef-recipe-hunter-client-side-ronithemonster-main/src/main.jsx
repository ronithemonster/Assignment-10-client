import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout.jsx";
import Login from "./components/Pages/User/Login";
import Register from "./components/Pages/User/Register";
import Home from "./components/Pages/Home/Home";
import AuthProvider from "./components/Providers/AuthProvider";
import RecepyDetailsLayout from "./components/Layout/RecepyDetailsLayout";
import RecipyDetails from "./components/Pages/RecipyDetails/RecipyDetails";
import Blogs from "./components/Pages/Blogs/Blogs";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
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
        element: <Register></Register>,
      },
      {
        path:'/blogs',
        element:<Blogs />

      },
      {
        path:'/chefData/:id' ,
        element: <PrivateRoute> <RecipyDetails /> </PrivateRoute>,
        

      }
    ],
    
  }
 

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);
