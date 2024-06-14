import { Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching categories");
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container
      maxWidth="sm"
      style={{
        position: "fixed",
        width: "fit-content",
        left: 0,
        top: 55,
        bottom: 0,
        backgroundColor: "#eee",
        padding: "20px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ zIndex: 1 }}>
        <Typography
          variant="h5"
          style={{ color: "#333", marginBottom: "10px" }}
        >
          Categories
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        {categories.map((category) => (
          <div key={category.name}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginBottom: "10px" }}
            >
              {category.name}
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryBar;
