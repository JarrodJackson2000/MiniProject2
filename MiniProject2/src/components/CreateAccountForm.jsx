import React, { useState } from "react";
import { TextField, Button, Link, Grid, Typography } from "@mui/material";

const CreateAccountForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add create account logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        color: "black", // Add this line to make the text black
      }}
    >
      <Typography variant="h5" gutterBottom>
        Create Account
      </Typography>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item>
          Already have an account? <Link href="/login">Login</Link>
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Create Account
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateAccountForm;
