import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Blue from "../assets/blueic.png";
import Red from "../assets/redic.png";
import Green from "../assets/greenic.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storedData = localStorage.getItem("user");
    const parsedData = JSON.parse(storedData);

    if (
      parsedData &&
      data.user_email === parsedData.user_email &&
      data.password === parsedData.password
    ) {
      navigate("/home");
    } else {
      alert("Wrong Email or Password or Register your data");
    }
  };
  return (
    <div className="home-content">
      <Link to="/login" type="button" className="linkbtn">
        Home Page/
      </Link>
      <Link to="/login" type="button" className="linkbtn1">
        Login
      </Link>
      <div class="container vh-100 d-flex justify-content-center align-items-center">
        <div class="row justify-content-center align-items-center w-100">
          <div class="col-4 " id="in-border">
            <div
              id="top-border"
              class="d-flex justify-content-between align-items-center  "
            >
              <div>Login</div>
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
                <h3 className="text-center signin-txt">Login</h3>
                <div className="form-group">
                  <label htmlFor="user_email" id="label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="user_email"
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
                <div className="form-group">
                  <label htmlFor="password" id="label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    {...register("password", {
                      required: "* Password is required!",
                      minLength: {
                        value: 6,
                        message: "* Password must be at least 6 characters!",
                      },
                      validate: (value) =>
                        value.trim() !== "" ||
                        "* Password cannot contain only spaces!",
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  {errors.password && (
                    <p className="text-danger" role="alert">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="justify-content-space-between">
                  <span>
                    <button type="submit" className="reg-button-inlog">
                      Login
                    </button>

                    <Link to="/register" className="navlinkbtn">
                      <button type="button" className="login-button-inlog">
                        Register
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
export default Login;
