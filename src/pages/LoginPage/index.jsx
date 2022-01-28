import React,{useState,useEffect} from "react";
import { LoginForm } from "../../components";
import axios from "axios";
export function LoginPage() {
  const [FormData, setFormData] = useState(null);

  useEffect(() => {
    axios.post('http://localhost:3000/api/v1/users/login', FormData).then(res=>console.log(res))
  }, [FormData]);
  
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
