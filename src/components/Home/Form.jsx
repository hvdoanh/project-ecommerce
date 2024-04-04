import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/home/form.css";
import anh6 from "../../assets/images/anh6.jpg";

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
      <div className="img_form">
        <img src={anh6} alt="img_form" />
      </div>

      <form onSubmit={handleSubmit(handleFormEmail)} className="all_form">
        <div className="title_form">Đăng ký nhận bản tin</div>
        <p className="desc_form">
          Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
        </p>
        <div className="form_text">
          <div className="box">
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="Nhập email của bạn"
              className="input_info"
              data-validate="{required:true, 'validate-email':true,equalTo:'#email'}"
            />
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
