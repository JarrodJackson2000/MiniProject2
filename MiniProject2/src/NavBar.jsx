import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom"; // Import the Link component from React Router

export default function NavBar() {
  return (
    <AppBar position="fixed" backgroundColor="#4dabf5">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {/* Wrap the text with the Link component */}
          <Typography variant="h5">AllMart</Typography>
        </Link>
        <div style={{ flexGrow: 1 }}></div>
        <Tooltip title="View Cart">
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            {/* Wrap the IconButton with the Link component */}
            <IconButton color="white">
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          {/* Wrap the AccountCircleIcon with the Link component */}
          <IconButton color="white">
            <AccountCircleIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
