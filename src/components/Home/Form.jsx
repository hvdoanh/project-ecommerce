import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/home/form.css";

function Form() {
  const { register, handleSubmit } = useForm();

  const handleFormEmail = (data) => {
    const dataEmail = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      slectObject: data.doituong,
      chooseTarget: data.target,
      to_name: "doanh",
      message: "Email form to client",
    };

    emailjs
      .send("service_xa57bdd", "template_3ryu3k8", dataEmail, {
        publicKey: "QHOOGAERdOMwmB4o8",
      })
      .then(
        (result) => {
          toast.success("Hẹn lại thành công", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="conatiner-form">
      <form onSubmit={handleSubmit(handleFormEmail)} className="all_form">
        <div className="form_text">
          <div className="box">
            <label htmlFor="name" className="label_info">
              Họ Tên
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Tên bạn là gì?"
              className="input_info"
            />
          </div>

          <div className="box">
            <label htmlFor="phone" className="label_info">
              Số điện thoại
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              placeholder="Mời nhập số điện thoại"
              className="input_info"
            />
          </div>

          <div className="box">
            <label htmlFor="email" className="label_info">
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="Email của bạn"
              className="input_info"
            />
          </div>

          <div className="box">
            <label htmlFor="doituong" className="label_info">
              Bạn Là
            </label>
            <select
              {...register("doituong")}
              className="input_info"
              id="doituong"
            >
              <option value="0">Chọn đối tượng</option>
              <option value="hocsinh">Học sinh C2, C3</option>
              <option value="sinhvien">Sinh Viên Năm 3</option>
            </select>
          </div>

          <div className="box">
            <label className="label_info">Mục Tiêu Của Bạn</label>
            <select {...register("target")} className="input_info">
              <option value="0">Chọn mục tiêu học tập của bạn</option>
              <option value="tts">Thực tập</option>
              <option value="dilam">Đi làm luôn</option>
            </select>
          </div>
        </div>

        <div className="gui">
          <button>Hẹn lịch</button>
        </div>
      </form>

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
}

export default Form;
