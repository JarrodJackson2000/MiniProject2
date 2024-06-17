import React from "react";
import { Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cart, removeFromCart } = useContext(UserContext);

  const rootStyle = {
    flexGrow: 1,
    padding: "16px",
    paddingTop: "64px", // Add padding to the top to avoid overlapping with the nav bar
  };

  const cardStyle = {
    marginBottom: "16px",
  };

  const titleStyle = {
    marginBottom: "16px",
    color: "black",
  };

  const buttonStyle = {
    marginTop: "16px",
  };

  const totalStyle = {
    marginTop: "16px",
    color: "black",
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2); // Limit total to 2 decimal places

  return (
    <div style={rootStyle}>
      <Typography variant="h4" style={titleStyle}>
        Shopping Cart
      </Typography>
      {cart.map((item, index) => (
        <Card key={index} style={cardStyle}>
          <CardContent>
            <img
              src={item.images[0]}
              alt={item.title}
              style={{ width: "100px", height: "100px" }}
            />
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body1">{item.description}</Typography>
            <Typography variant="body1">Price: ${item.price}</Typography>
            <Button
              onClick={() => removeFromCart(item)}
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              style={{ backgroundColor: "red" }} // Change the background color to red
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
      <Typography variant="h6" style={totalStyle}>
        Total: ${total}
      </Typography>
      <Grid>
        <Button variant="contained" color="primary" style={buttonStyle}>
          Checkout
        </Button>
      </Grid>
    </div>
  );
};

export default Cart;
