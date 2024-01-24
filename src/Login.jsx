import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [data, setData] = useState();

  const handLeInput = (key, value) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLogin = () => {
    console.log("data", data);
  };
  return (
    <div className="container">
      <form action="" className="form_login">
        <div className="img">
          <svg
            width="124"
            height="102"
            viewBox="0 0 124 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2H15.6523C17.8311 2 19.7535 3.42651 20.3871 5.51343L41.7596 75.9005C42.3932 77.9874 44.3156 79.4139 46.4942 79.4139H94.6487C96.9129 79.4139 98.8889 77.8753 99.4455 75.6779L108.068 41.6561C108.624 39.4586 110.6 37.9201 112.865 37.9201H121.386"
              stroke="white"
              strokeWidth="3.75648"
              strokeLinecap="round"
            />
            <path
              d="M72.5933 21.7428C71.8686 21.0174 70.6937 21.0174 69.969 21.7428L58.159 33.5667C57.4344 34.2923 57.4344 35.4686 58.159 36.1942C58.8837 36.9197 60.0588 36.9197 60.7835 36.1942L71.2811 25.6842L81.7788 36.1942C82.5035 36.9197 83.6785 36.9197 84.4032 36.1942C85.1279 35.4686 85.1279 34.2923 84.4032 33.5667L72.5933 21.7428ZM73.1369 57.7381V23.0566H69.4254V57.7381H73.1369Z"
              fill="white"
            />
            <path
              d="M58.2909 99.8512C61.3656 99.8512 63.8581 97.3557 63.8581 94.2774C63.8581 91.1991 61.3656 88.7036 58.2909 88.7036C55.2162 88.7036 52.7236 91.1991 52.7236 94.2774C52.7236 97.3557 55.2162 99.8512 58.2909 99.8512Z"
              stroke="white"
              strokeWidth="3.00518"
            />
            <path
              d="M85.5085 99.8512C88.5832 99.8512 91.0757 97.3557 91.0757 94.2774C91.0757 91.1991 88.5832 88.7036 85.5085 88.7036C82.4338 88.7036 79.9412 91.1991 79.9412 94.2774C79.9412 97.3557 82.4338 99.8512 85.5085 99.8512Z"
              stroke="white"
              strokeWidth="3.00518"
            />
          </svg>
        </div>
        <div className="username">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66666C5.78261 12.5 4.93476 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15906 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15906 9.16667 10 9.16667Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => handLeInput("username", e.target.value)}
          />
        </div>
        <div className="password">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91286 16.7538 9.16667 15.8333 9.16667Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.83333 9.16667V5.83333C5.83333 4.72827 6.27232 3.66846 7.05372 2.88706C7.83512 2.10565 8.89493 1.66667 9.99999 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88706C13.7277 3.66846 14.1667 4.72827 14.1667 5.83333V9.16667"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="password"
            onChange={(e) => handLeInput("password", e.target.value)}
          />
        </div>
        <div className="btn-login" onClick={handleLogin}>
          Login
        </div>
        <p className="forgot">Forgot password?</p>
      </form>
    </div>
  );
};

export default Login;
