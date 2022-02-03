import { useRoutes } from "react-router-dom";
import { HomePage, LoginPage, NotFoundPage } from "../pages";
import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import { Navigation } from "../components";
const Routers =  () =>useRoutes([
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: '/',
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      }
    ],
  },
  {
    path: "*",
    element:(<><Navigation/> <NotFoundPage/></>)
  },
])
export default Routers