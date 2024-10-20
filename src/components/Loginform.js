import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  validateConfirmPassword,
  validateEmailOrPhone,
} from "../utils/validate";

const LoginForm = ({ formType }) => {
  const emailRef = useRef("");
  const pwdRef = useRef("");
  const confirmPwdRef = useRef("");

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateEmailOrPhone(emailRef.current.value),
      password: !pwdRef.current.value ? "Please enter your password" : "",
      confirmPassword:
        formType === "signup"
          ? validateConfirmPassword(
              pwdRef.current.value,
              confirmPwdRef.current.value
            )
          : "",
    };

    setErrorMessage(newErrors);

    // Only proceed if no errors exist
    if (!newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
      // Submit the form data here
      console.log("done");
    }
  };

  return (
    <div className="max-w-[450px] w-full">
      <div className="formCon py-12 px-16 bg-black/70 rounded">
        <h2 className="text-3xl text-white font-bold mb-7">
          {formType === "signup" ? "Sign Up" : "Sign In"}
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Email or Mobile Number Input */}
          <label htmlFor="emailOrNumber">
            <input
              ref={emailRef}
              type="text"
              name="emailOrNumber"
              id="emailOrNumber"
              placeholder="Email or Mobile number"
              className="px-4 py-2 w-full leading-normal rounded bg-black/75 border border-slate-600 text-slate-400"
              required
            />
            {errorMessage.email && (
              <p className="text-red-500 text-sm p-1">{errorMessage.email}</p>
            )}
          </label>

          {/* Password Input */}
          <label htmlFor="password">
            <input
              ref={pwdRef}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="px-4 py-2 w-full leading-normal rounded bg-black/75 border border-slate-600 text-slate-400"
              required
            />
            {errorMessage.password && (
              <p className="text-red-500 text-sm p-1">
                {errorMessage.password}
              </p>
            )}
          </label>

          {/* Optional: Confirm Password for Signup */}
          {formType === "signup" && (
            <label htmlFor="confirmPassword">
              <input
                ref={confirmPwdRef}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="px-4 py-2 w-full leading-normal rounded bg-black/75 border text-slate-400 border-slate-600"
                required
              />
              {errorMessage.confirmPassword && (
                <p className="text-red-500 text-sm p-1">
                  {errorMessage.confirmPassword}
                </p>
              )}
            </label>
          )}

          {/* Submit Button */}
          <input
            type="submit"
            value={formType === "signup" ? "Sign Up" : "Sign In"}
            className="w-full text-center py-2 bg-red-600 text-white rounded font-semibold"
          />
        </form>

        {/* Footer Links */}
        <div className="formFooter text-white flex flex-col gap-5 mt-5 text-sm">
          {formType === "signup" ? (
            <p>
              Already have an account?{" "}
              <Link to={"/"} className="font-bold">
                Sign In
              </Link>
            </p>
          ) : (
            <>
              <p className="text-center">Forgot Password?</p>
              <p>
                New to FilmAI?
                <Link to={"/signup"} className="font-bold hover:underline">
                  Sign up now
                </Link>
              </p>
            </>
          )}
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <Link to="/learn-more" className="underline">
              Learn more.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
