import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#dd807d63",
    },
    secondary: {
      main: "#dd807df8",
    },
  },
});
const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <ThemeProvider theme={theme}>
      <Link to="/cart">
        <Badge badgeContent={total} color="primary">
          <ShoppingCartIcon color="main" style={{ fontSize: "2rem" }} />
        </Badge>
      </Link>
    </ThemeProvider>
  );
};

export default CartWidget;
