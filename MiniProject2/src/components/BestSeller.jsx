import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import { useLocation } from "react-router-dom"; // Import useLocation hook

export default function BestSeller() {
  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const location = useLocation(); // Use useLocation hook instead of useSearchParams
  const [categoryText, setCategoryText] = useState("Best Sellers!");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://dummyjson.com/products";
        let filteredProducts = [];
        if (location.search) {
          // Update searchParams to location.search
          url += `/${location.search}`;
          const response = await fetch(url);
          const data = await response.json();
          filteredProducts = data.products.filter(
            (product) => product.category === location.search.split("/")[1]
          );
          console.log(location.search.split("/")[1]);
          setProducts(filteredProducts);
          let newCategoryText = location.search.split("/")[1];
          setCategoryText(
            newCategoryText.charAt(0).toUpperCase() + newCategoryText.slice(1)
          );
        } else {
          const response = await fetch(url);
          const data = await response.json();
          filteredProducts = data.products.filter(
            (product) => product.rating > 4.0
          );
          setProducts(filteredProducts);
          setCategoryText("Best Sellers!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.search]); // Update searchParams to location.search

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 340; // Scroll left by 340 pixels
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 340; // Scroll right by 340 pixels
    }
  };

  useEffect(() => {
    if (cardRef.current) {
      const cardHeight = cardRef.current.clientHeight;
      const arrowButtons = document.querySelectorAll(".arrow-button");

      arrowButtons.forEach((button) => {
        button.style.height = `${cardHeight}px`;
      });
    }
  }, [products]);

  return (
    <>
      <div
        style={{
          position: "static",
          marginTop: "50",
          marginLeft: "200px",
          marginBottom: "50px",
        }}
      >
        {" "}
        <Typography variant="h5" style={{ color: "black" }}>
          {categoryText}
        </Typography>
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
          }}
          ref={containerRef}
        >
          <div style={{ position: "fixed", left: "350px" }}>
            <Button
              onClick={scrollLeft}
              className="arrow-button"
              style={{
                height: cardRef.current?.clientHeight || "auto",
                backgroundColor: "#1769aa", // Set blue background color
              }}
            >
              <FaArrowLeft />
            </Button>
          </div>
          {products.map((product) => (
            <Card
              key={product.id}
              className="card"
              style={{
                marginRight: "20px",
                flex: "0 0 300px", // Increase the card size to 300px
                padding: "10px",
                border: "1px solid #ccc", // Add a solid border with a color of #ccc
                borderRadius: "8px", // Add border radius to create rounded corners
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
                position: "relative", // Add position relative to the card
              }}
              ref={cardRef}
            >
              <CardMedia
                component="img"
                height="200" // Increase the height of the image to 200px
                width="300" // Increase the width of the image to 300px
                image={product.images[0]}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">
                  {product.title.length > 20
                    ? `${product.title.substring(0, 20)}...`
                    : product.title}
                </Typography>
                <Typography variant="body1">Price: ${product.price}</Typography>
                <Typography variant="body1">
                  Rating: {product.rating}
                </Typography>
                <Typography variant="body2">
                  Description: {product.description}{" "}
                  {/* Add product description */}
                </Typography>
                <Button
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                  style={{ marginBottom: "0" }} // Remove the space between the icon and the bottom border
                >
                  {hoveredProductId === product.id ? "Add to Cart" : <FaPlus />}
                </Button>
              </CardContent>
            </Card>
          ))}
          <div style={{ position: "fixed", right: "150px" }}>
            <Button
              onClick={scrollRight}
              className="arrow-button"
              style={{
                height: cardRef.current?.clientHeight || "auto",
                backgroundColor: "#1769aa", // Set blue background color
              }}
            >
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
