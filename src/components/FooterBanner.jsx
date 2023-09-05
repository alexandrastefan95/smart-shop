import { Link, useNavigate } from "react-router-dom";
import { urlFor } from "../helpers/client";
const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  const navigate = useNavigate();
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/product/ilumaprime-red")}
          >
            {largeText1}
          </h3>
          <h3>{largeText2}</h3>
          <button
            style={{
              cursor: "pointer",
              fontSize: "16px",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={() => navigate("/product/ilumaprime-blue")}
          >
            {saleTime}
          </button>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link to={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className="footer-banner-image" />
      </div>
    </div>
  );
};
export default FooterBanner;
