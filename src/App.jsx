import React from "react";
import MyRoutes from "./utils/MyRoutes";
import "./App.css";
import { AuthContext_Component } from "./store/AuthContext";
import { Navigation } from "./components";
import {useAuth} from './utils/useAuth';

function App() {
  
  return (
    <AuthContext_Component>
      {useAuth() && <Navigation />}
      <MyRoutes />
    </AuthContext_Component>
  );
}
export default App;
