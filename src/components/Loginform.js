import React from "react";
import { Link } from "react-router-dom";

const Loginform = ({ formType }) => {
  return (
    <div className="max-w-[450px] w-full">
      <div className="formCon py-12 px-16 bg-black/70 rounded">
        <h2 className="text-3xl text-white font-bold mb-7">
          {formType === "signup" ? "Sign Up" : "Sign In"}
        </h2>

        <form className="flex flex-col gap-5">
          {/* Email or Mobile Number Input */}
          <label htmlFor="emailOrNumber">
            <input
              type="text"
              name="emailOrNumber"
              id="emailOrNumber"
              placeholder="Email or Mobile number"
              className="px-4 py-2 w-full leading-normal rounded bg-black/75 border border-slate-600"
              required
            />
          </label>

          {/* Password Input */}
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="px-4 py-2 w-full leading-normal rounded bg-black/75 border border-slate-600"
              required
            />
          </label>

          {/* Optional: Additional Fields for Signup */}
          {formType === "signup" && (
            <label htmlFor="confirmPassword">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="px-4 py-2 w-full leading-normal rounded bg-black/75 border border-slate-600"
                required
              />
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
                New to FilmAI?{" "}
                <Link to={"/signup"} className="font-bold">
                  Sign up now
                </Link>
              </p>
            </>
          )}
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
