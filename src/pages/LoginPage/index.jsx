import React, { useState, useEffect, useContext } from "react";
import { LoginForm, Navigation } from "../../components";
import axios from "axios";
import { AuthContext } from "../../store/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
export function LoginPage() {
  const [FormData, setFormData] = useState(null);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (FormData) {
      axios
        .post("http://localhost:5000/api/v1/users/login", FormData)
        .then(res=>res.status === 200 && setAuth({ loggedIn: true }))
        .catch((err) => console.log(err.response));
    }
  }, [FormData]);
  useEffect(() => {
    if (auth.loggedIn) {
      navigate("/", {
        replace: true,
      });
    }
  }, [auth]);
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          <LoginForm loginFormData={setFormData} />
        </h2>
      </div>
    </div>
  );
}
