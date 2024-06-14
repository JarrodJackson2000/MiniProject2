import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function NavBar() {
  return (
    <AppBar position="fixed" backgroundColor="#4dabf5">
      <Toolbar>
        <Typography variant="h5">AllMart</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <Tooltip title="View Cart">
          <IconButton color="#4dabf5">
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
        <IconButton color="#4dabf5">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
