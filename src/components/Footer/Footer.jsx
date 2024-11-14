import { assets } from '../../assets/assets';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo1} alt="" />
          <p>
            food for the body is not <br />
            enough.There must be food <br />
            for the soul.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-911-911-9111</li>
            <li>rustin@cafe.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        CopyRight 2024 @ RustinCafe.com -All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
