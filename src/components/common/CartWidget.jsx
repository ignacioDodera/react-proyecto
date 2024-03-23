import { Badge } from "@mui/material";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero color="primary">
        <FaCartPlus size="25px" color="black" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
