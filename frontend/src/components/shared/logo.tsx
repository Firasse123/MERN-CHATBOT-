import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {/* Logo image from public folder */}
        <img
          src="/openai.png"
          alt="OpenAI Logo"
          width="30"
          height="30"
          className="image-inverted"
        />
        {/* Text: hidden on xs/sm, visible on md+ */}
     <Typography
  sx={{
    display: "block",
    mr: "auto",
    fontWeight: 800,
    textShadow: "2px 2px 20px #000",
    ml: 1,
  }}
        >
          <span style={{ fontSize: "20px" }}>MERN</span>-GPT
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;
