import React from "react";
import MyRoutes from "./utils/MyRoutes";
import "./App.css";
import { AuthContext_Component } from "./store/AuthContext";
import {useAuth} from './utils/useAuth';

function App() {
  return (
      <MyRoutes />
  );
}
export default App;
