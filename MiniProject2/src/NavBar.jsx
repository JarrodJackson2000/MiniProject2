import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="fixed" backgroundColor="#4dabf5">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h5">AllMart</Typography>
        </Link>
        <div style={{ flexGrow: 1 }}></div>
        <Tooltip title="View Cart">
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <IconButton color="white">
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <IconButton color="white">
            <AccountCircleIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
