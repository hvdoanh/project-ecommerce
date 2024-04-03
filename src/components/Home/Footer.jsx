/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import inTa from "../../assets/images/inta.svg";
import faceBook from "../../assets/images/facebook.png";
import zalo from "../../assets/images/zalo.png";
import youTube from "../../assets/images/youtube.svg";
import tikTok from "../../assets/images/tiktok.png";
import Phone from "../../assets/images/phone.svg";
import email from "../../assets/images/email.svg";
import "../../styles/home/footer.css";

function Footer() {
  return (
    <div className="site_footer">
      <div className="site_footer_top">
        <div className="site_footer_sidebar">
          <div className="footer_sidebar_opinion">
            <h4 className="footer_opinion_title">COOLMATE lắng nghe bạn!</h4>
            <p className="footer_opinion_derc">
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa.
            </p>
            <a href="#" className="footer_btn">
              Đóng góp ý kiến
            </a>
          </div>

          <div className="footer_sidebar_contact">
            <div className="footer_infor">
              <div className="footer_infor_icon">
                <img src={Phone} alt="phone" />
              </div>
              <div className="footer_infor_content_phone">
                <span className="footer_content_title">Hotline</span>
                <div className="footer_content_derc">
                  <div>
                    <a href="#">1900.272737</a>-<a href="#">028.7777.2737</a>
                  </div>
                  <span>(8:30 - 22:00)</span>
                </div>
              </div>
            </div>

            <div className="footer_infor">
              <div className="footer_infor_icon">
                <img src={email} alt="email" />
              </div>
              <div className="footer_infor_content_email">
                <span className="footer_content_title">Email</span>
                <a href="#">Cool@coolmate.me</a>
              </div>
            </div>
          </div>

          <div className="footer_sidebar_social">
            <a href="#" className="footer_social_item facebook">
              <img src={faceBook} alt="facebook" />
            </a>
            <a href="#" className="footer_social_item">
              <img src={zalo} alt="zalo" />
            </a>
            <a href="#" className="footer_social_item">
              <img src={tikTok} alt="tiktok" />
            </a>
            <a href="#" className="footer_social_item">
              <img src={inTa} alt="Intagram" />
            </a>
            <a href="#" className="footer_social_item">
              <img src={youTube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
