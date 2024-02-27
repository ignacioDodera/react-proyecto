import { Badge } from "@mui/material";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero color="primary">
        <FaCartPlus size="25px" color="black" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
