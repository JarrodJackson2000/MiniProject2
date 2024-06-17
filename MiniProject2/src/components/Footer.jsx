import React from "react";

const Footer = () => {
  return (
    <footer style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <p style={{ fontSize: "12px", opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} AllMart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
