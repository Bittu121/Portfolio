import { Link } from "react-router-dom";
import "../CSS/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email:bittukumar8713@gmail.com</p>
          <p>Phone:+91 9199401774</p>
          <p>Address:Noida Sector - 12</p>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <Link to="">
                Facebook
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="">
                Twitter
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="">
                Instagram
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="">
                Linkedin
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-bar">
        <p>&copy; 2024 Portfolio . All rights reserved</p>
      </div>
    </section>
  );
};
export default Footer;
