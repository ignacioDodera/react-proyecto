import "../layout/navbar.css";
import CartWidget from "../common/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/">
          <img src="https://res.cloudinary.com/dfxzcxic6/image/upload/v1706968185/BBBar2_gdvirq.png"></img>
        </Link>
        <ul className="categories">
          <Link to="/">INICIO</Link>
          <Link to="/category/RON">RON</Link>
          <Link to="/category/WHISKY">WHISKY</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
