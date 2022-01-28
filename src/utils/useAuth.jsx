import { useContext, useEffect } from "react";
import { AuthContext } from "../store/AuthContext";
export  const useAuth = () => {
//   const location = useLocation();
//   console.log(location.pathname);  
  const {auth,setAuth}=useContext(AuthContext) 
  return auth && auth.loggedIn;
};