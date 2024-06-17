import React, { useState } from "react";
import { TextField, Button, Link, Grid, Typography } from "@mui/material";
import { UserContext } from "../UserContext";
import { useContext } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // Add state for valid email

  const { userEmail, cart, addToCart, removeFromCart, setUserEmail } =
    useContext(UserContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogout = () => {
    setUserEmail(null);
  };

  const handleLogin = () => {
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);

    if (isValid) {
      setUserEmail(email);
    }
  };

  return (
    <form
      style={{
        border: "1px solid #ccc",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        color: "black",
      }}
    >
      {userEmail ? (
        <>
          <Typography variant="h5" gutterBottom>
            You are logged in
          </Typography>
          <Button onClick={handleLogout} variant="contained" color="primary">
            Logout
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                required
                error={!isValidEmail} // Show error if email is not valid
                helperText={!isValidEmail && "Invalid email format"} // Display error message
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Grid>
            <Grid item>
              <Link href="/create-account">Create Account</Link>
            </Grid>
            <Grid item>
              <Button
                onClick={handleLogin} // Call handleLogin function
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </form>
  );
};

export default LoginForm;
