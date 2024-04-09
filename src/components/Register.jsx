import React, { useState } from "react";
import "../styles/register.css";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const urlApi = "https://648478f7ee799e321626ba3d.mockapi.io/api/v1/register";

// let registerSchema = yup.object({
//   name: yup.string().required().min(6),
//   email: yup.string().email().required(),
//   password: yup.string().required().min(6),
// });

export const Register = () => {
  const [dataRegister, setDataRegister] = useState({});
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // mode: "onChange",
    // resolver: yupResolver(registerSchema),
  });

  const handleRegister = (data) => {
    const postUser = axios.post(urlApi, data);
    postUser
      .then((data) => setDataRegister(data.data))
      .catch((error) => console.log(error));

    reset();

    toast.success("Đăng kí thành công", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  localStorage.setItem("dataRegister", JSON.stringify(dataRegister));

  return (
    <div className="register-container">
      <div className="title-container">
        <h1>CIT EDU SHOP</h1>
        <p>Học lập trình cùng CIT Education</p>
        <button>
          <Link to={"/login"}>Login</Link>
        </button>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit(handleRegister)}>
          <h1>Create Account</h1>
          <div className="social-container">
            <Link to="#" className="social">
              <FaFacebook />
            </Link>
            <Link to="#" className="social">
              <FaGooglePlusG />
            </Link>
            <Link to="#" className="social">
              <FaLinkedin />
            </Link>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: {
                value: true,
                message: "Name required",
              },
              minLength: {
                value: 5,
                message: "You must enter at least 5 characters",
              },
            })}
          />
          <span className="error_message">{errors.name?.message}</span>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email invalidate",
              },
            })}
          />
          <span className="error_message">{errors.email?.message}</span>

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "Password required",
              },
              minLength: {
                value: 6,
                message: "You must enter at least 6 characters",
              },
            })}
          />
          <span className="error_message">{errors.password?.message}</span>

          <span className="enter_login">
            ALREADY HAVE AN ACCOUNT ? <Link to={"/login"}>LOGIN NOW</Link>
          </span>
          <button>Register</button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
