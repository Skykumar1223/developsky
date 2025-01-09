import React, { useState, useEffect } from "react";
import Blue from "../assets/blueic.png";
import Red from "../assets/redic.png";
import Green from "../assets/greenic.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const password = watch("password");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data)); // Save form data in localStorage
    console.log("Form data saved to localStorage:", data);
    navigate("/login"); // Navigate to login
  };

  return (
    <div className="home-content">
      <Link to="/login" type="button" className="linkbtn">
        Login/
      </Link>
      <Link to="/register" type="button" className="linkbtn1">
        Signup Page
      </Link>
      <div class="container vh-100 d-flex justify-content-center align-items-center">
        <div class="row justify-content-center align-items-center w-100">
          <div class="col-4 " id="in-border">
            <div
              id="top-border"
              class="d-flex justify-content-between align-items-center"
            >
              <div>Signup</div>
              <span>
                <img src={Green} class="iconcode" alt="icon"></img>
                <img
                  src={Blue}
                  class="iconcode"
                  style={{ height: "8px", width: "8px" }}
                  alt="icon"
                ></img>
                <img src={Red} class="iconcode" alt="icon"></img>
              </span>
            </div>
            <div className="inform">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center signin-txt">Sign up</h3>
                <div class="form-group">
                  <label for="exampleInputEmail1 " id="label">
                    Username
                  </label>
                  <input
                    type="user_name"
                    class="form-control inputfields"
                    {...register("user_name", {
                      required: "* User name is required!",
                      minLength: {
                        value: 3,
                        message: "* User name must be at least 3 characters!",
                      },
                      validate: (value) =>
                        value.trim() !== "" ||
                        "* User name cannot be only spaces!",
                    })}
                    aria-invalid={errors.user_name ? "true" : "false"}
                  />
                  {errors.user_name && (
                    <p className="text-danger" role="alert">
                      {errors.user_name.message}
                    </p>
                  )}
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" id="label">
                    Email
                  </label>
                  <input
                    type="user_email"
                    class="form-control"
                    id="exampleInputPassword1"
                    {...register("user_email", {
                      required: "* Email Address is required!",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "* Invalid Email Address!",
                      },
                    })}
                    aria-invalid={errors.user_email ? "true" : "false"}
                  />
                  {errors.user_email && (
                    <p className="text-danger" role="alert">
                      {errors.user_email.message}
                    </p>
                  )}
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" id="label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    {...register("password", {
                      required: "* Password is required!",
                      minLength: {
                        value: 6,
                        message: "* Password must be at least 6 characters!",
                      },
                      validate: (value) =>
                        value.trim() !== "" ||
                        "* Password cannot be only spaces!",
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  {errors.password && (
                    <p className="text-danger" role="alert">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" id="label">
                    Confirm Password
                  </label>
                  <input
                    type="confirm_password"
                    class="form-control"
                    id="exampleInputPassword1"
                    {...register("confirm_password", {
                      required: "* Enter the confirm password !",
                      pattern: {
                        message: "Invalid Password formate",
                      },
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  {errors.confirm_password && (
                    <p className="text-danger" role="alert">
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>
                <div className="justify-content-space-between">
                  <span>
                    <button type="submit" className="reg-button">
                      Register
                    </button>
                    <Link to="/login" className="navlinkbtn">
                      <button type="" className="login-button">
                        login
                      </button>
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
