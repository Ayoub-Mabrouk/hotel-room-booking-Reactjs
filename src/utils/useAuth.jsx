import { useContext, useEffect } from "react";
import { AuthContext } from "../store/AuthContext";
export  const useAuth = () => {
//   const location = useLocation();
//   console.log(location.pathname);
  const data=useContext(AuthContext)
  useEffect(()=>{
      data && data.setAuth((pre)=>({...pre,loggedIn:false}))
  },[data])
  return data && data?.loggedIn;
};