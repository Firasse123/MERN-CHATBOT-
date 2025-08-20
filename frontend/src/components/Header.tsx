import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Logo from "./shared/logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/Navigation";

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        {/* ✅ Logo on the left */}
        <Logo />

        {/* ✅ Navigation links pushed to the right */}
        <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/chat"
                text="Go To Chat"
                textColor="black"
              />
              <NavigationLink
                bg="#d32f2f" // 🔴 red background for logout
                textColor="white"
                to="/"
                text="Logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                textColor="white"
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
