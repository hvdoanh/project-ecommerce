import React from "react";
import "../styles/login.css";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// let LoginSchema = yup.object({
//   name: yup.string().required().min(6),
//   password: yup.string().required().min(6),
// });

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // mode: "onChange",
    // resolver: yupResolver(LoginSchema),
  });

  const handleFormLogin = (data) => {
    console.log(data);
    const dataLogin = JSON.parse(localStorage.getItem("dataRegister"));
    console.log(dataLogin);

    if (data.name === dataLogin.name && data.password === dataLogin.password) {
      toast.success("Đăng nhập thành công", {
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
        navigate("/");
      }, 2000);
    } else {
      toast.error("Đăng kí thất bại", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      reset();
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="title-container">
          <h1>CIT EDU SHOP</h1>
          <p>Học lập trình cùng CIT Education</p>
          <button>
            <Link to={"/register"}>Register</Link>
          </button>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit(handleFormLogin)}>
            <h1>Sign In</h1>
            <div className="social-container">
              <Link href="#" className="social">
                <FaFacebook />
              </Link>
              <Link href="#" className="social">
                <FaGooglePlusG />
              </Link>
              <Link href="#" className="social">
                <FaLinkedin />
              </Link>
            </div>
            <span>or use your account </span>
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name required",
                },
              })}
            />
            <span className="error_message">{errors.name?.message}</span>

            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Email required",
                },
              })}
            />
            <span className="error_message">{errors.password?.message}</span>

            <Link href="#">Forgot your password?</Link>
            <span className="enter_register">
              DON'T HAVE AN ACCOUNT ? <Link to={"/register"}>REGISTER NOW</Link>
            </span>
            <button>Login</button>
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
    </>
  );
};
