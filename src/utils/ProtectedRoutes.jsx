import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Navigation } from "../components";
import { useAuth } from "./useAuth";
export default () => useAuth() ? <><Navigation /> <Outlet /></> : <Navigate to="login" replace state={{from:useLocation()}} />;