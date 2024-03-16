import React, { useState } from "react";
import "../styles/register.css";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const urlApi = "https://648478f7ee799e321626ba3d.mockapi.io/api/v1/register";

let registerSchema = yup.object({
  name: yup.string().required().min(6),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [dataRegister, setDataRegister] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (data) => {
    const postUser = axios.post(urlApi, data);
    postUser.then((data) => setDataRegister(data.data));
    postUser.catch((error) => console.log(error));
    localStorage.setItem("dataRegister", JSON.stringify(dataRegister));

    reset();
  };

  return (
    <div class="register-container">
      <div class="title-container">
        <h1>CIT EDU SHOP</h1>
        <p>Học lập trình cùng CIT Education</p>
        <button>
          <a href="./login.html">Login</a>
        </button>
      </div>

      <div class="form-container">
        <form onSubmit={handleSubmit(handleRegister)}>
          <h1>Create Account</h1>
          <div class="social-container">
            <a href="#" class="social">
              <FaFacebook />
            </a>
            <a href="#" class="social">
              <FaGooglePlusG />
            </a>
            <a href="#" class="social">
              <FaLinkedin />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" {...register("name")} />
          <span className="error_message">{errors.name?.message}</span>
          <input type="email" placeholder="Email" {...register("email")} />
          <span className="error_message">{errors.email?.message}</span>

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <span className="error_message">{errors.password?.message}</span>

          <p>
            ALREADY HAVE AN ACCOUNT ? <a href="./login.html">lOGIN NOW</a>
          </p>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};
