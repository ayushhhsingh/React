import React from "react";

function Logo({ width = "50px" }) {
  return (
    <img
      src="/logo.png.png" // file is public/logo.png.png
      className="rounded-full object-cover"
      style={{ width, height: width }}
      alt="Funky Finds Blog"
    />
  );
}

export default Logo;
