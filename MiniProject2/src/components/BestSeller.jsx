import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";

export default function BestSeller() {
  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.products.filter(
          (product) => product.rating > 4.0
        );

        setProducts(filteredProducts.reverse()); // Reverse the order of products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Scroll left by 200 pixels
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Scroll right by 200 pixels
    }
  };

  return (
    <>
      <div
        style={{ position: "static", marginTop: "-350px", marginLeft: "200px" }}
      >
        {" "}
        <Typography variant="h5">Best Sellers!</Typography>
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
              style={{ height: cardRef.current?.clientHeight || "auto" }}
            >
              {"<"}
            </Button>
          </div>
          {products.map((product) => (
            <Card
              key={product.id}
              className="card"
              style={{
                marginRight: "20px",
                flex: "0 0 200px",
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
                height="80"
                width="200"
                image={product.images}
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
              style={{ height: cardRef.current?.clientHeight || "auto" }}
            >
              {">"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
