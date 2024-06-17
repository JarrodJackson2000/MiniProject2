import {
  Typography,
  Container,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        position: "fixed",
        width: "fit-content",
        left: 0,
        top: 55,
        bottom: 0,
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
        <IconButton
          aria-controls="category-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ marginBottom: "10px" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="category-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {categories.map((category) => (
            <MenuItem
              key={category.slug}
              onClick={() => {
                const currentPath = window.location.pathname;
                const backslash = `${currentPath}?category/${category.slug}`;
                console.log(backslash);
                navigate(backslash);
                handleClose();
              }}
            >
              {category.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </Container>
  );
};

export default CategoryBar;
