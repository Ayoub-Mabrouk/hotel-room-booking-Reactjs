import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
export default () => useAuth() ? <Outlet /> : <Navigate to="login" replace state={{from:useLocation()}} />;
