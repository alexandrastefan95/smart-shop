import { AiFillInstagram, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <p> Copyright © 2023 Alexandra SmartShop. All rights reserved. </p>
      <p className="icons">
        <a href="http://instagram.com">
        <AiFillInstagram />
        </a>
        <a href="http://twitter.com">
        <AiOutlineTwitter />
        </a>
        <a href="http://facebook.com">
        <AiOutlineFacebook />
        </a>
      </p>
    </div>
  );
}

export default Footer;
