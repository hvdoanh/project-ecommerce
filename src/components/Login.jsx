import React from "react";
import "../styles/login.css";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let LoginSchema = yup.object({
  name: yup.string().required().min(6),
  password: yup.string().required().min(6),
});

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
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
            <a onClick={() => navigate("/register")}>Register</a>
          </button>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit(handleFormLogin)}>
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FaFacebook />
              </a>
              <a href="#" className="social">
                <FaGooglePlusG />
              </a>
              <a href="#" className="social">
                <FaLinkedin />
              </a>
            </div>
            <span>or use your account </span>
            <input type="text" placeholder="Name" {...register("name")} />
            <span className="error_message">{errors.name?.message}</span>

            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <span className="error_message">{errors.password?.message}</span>

            <a href="#">Forgot your password?</a>
            <span className="enter_register">
              DON'T HAVE AN ACCOUNT ?{" "}
              <a onClick={() => navigate("/register")}>REGISTER NOW</a>
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
