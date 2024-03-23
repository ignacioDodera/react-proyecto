import "../layout/navbar.css";
import CartWidget from "../common/CartWidget";
import { Link } from "react-router-dom";
import { menuNavigation } from "../../router/menuNavigation";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/">
          <img src="https://res.cloudinary.com/dfxzcxic6/image/upload/v1706968185/BBBar2_gdvirq.png"></img>
        </Link>
        <ul className="categories">
          {menuNavigation.map(({ id, text, path }) => (
            <Link key={id} to={path}>
              {text}
            </Link>
          ))}
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
