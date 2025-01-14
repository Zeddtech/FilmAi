import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  validateConfirmPassword,
  validateEmailOrPhone,
} from "../utils/validate";
import { createNewUser, signInUser } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../utils/redux/userSlice";

const LoginForm = ({ formType }) => {
  const user = useSelector((state) => state.user);
  const emailRef = useRef("");
  const pwdRef = useRef("");
  const confirmPwdRef = useRef("");
  const timeOutRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    db: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleUser = useCallback(
    async (user) => {
      dispatch(
        setUser({
          email: user.email,
          name: user.displayName,
          id: user.uid,
        })
      );
      emailRef.current.value = "";
      pwdRef.current.value = "";
      setErrorMessage({ email: "", password: "", confirmPassword: "" }); // Clear errors/ Clear errors
    },
    [dispatch]
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      ...errorMessage,
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
    if (
      !errorMessage.email &&
      !errorMessage.password &&
      !errorMessage.confirmPassword
    ) {
      setLoading(true);
      try {
        const user =
          formType === "signup"
            ? await createNewUser(emailRef.current.value, pwdRef.current.value)
            : await signInUser(emailRef.current.value, pwdRef.current.value);

        if (user) {
          handleUser(user);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error creating user:", error.message);
        setErrorMessage({
          ...errorMessage,
          db:
            formType == "SignIn"
              ? "Wrong email or password"
              : "Something went wrong! try again later",
        });
        timeOutRef.current = setTimeout(() => {
          setErrorMessage({
            ...errorMessage,
            db: "",
          });
        }, 2000);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    return () => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }
    };
  }, []);
  return (
    <div className="max-w-[450px] w-full bg-black/70 rounded">
      <div className="w-full text-center text-red-500 p-3 absolute font-medium bg-black/70">
        {errorMessage.db && errorMessage.db}
      </div>
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
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`w-full text-center py-2 bg-red-600 text-white rounded font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading
              ? "Loading..."
              : formType === "signup"
              ? "Sign Up"
              : "Sign In"}
          </button>
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
