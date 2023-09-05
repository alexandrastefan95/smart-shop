import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p className="logo">
          <a href="/">Alexandra SmartStore</a>
        </p>
        <p className="logo" style={{ marginLeft: "40px", cursor: "pointer" }}>
          <a onClick={() => navigate("/return-product")}>Return Product</a>
        </p>
      </div>
      <Button className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </Button>

      {showCart && <Cart />}
    </div>
  );
}

export default Navbar;
