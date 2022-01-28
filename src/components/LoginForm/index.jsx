import React, { useRef } from "react";

export function LoginForm(props) {
  const email = useRef("");
  const password = useRef("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.loginFormData({
      email: email.current.value,
      password: password.current.value,
    });
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-lg border rounded-lg mx-auto"
    >
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <label
            htmlFor="email"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Email
          </label>
          <input
            ref={email}
            name="email"
            className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Password
          </label>
          <input
            ref={password}
            name="password"
            className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>

        <button type="submit" className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
          Log in
        </button>
      </div>

      <div className="flex justify-center items-center bg-gray-100 p-4">
        <p className="text-gray-500 text-sm text-center">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
          >
            Register
          </a>
        </p>
      </div>
    </form>
  );
}
