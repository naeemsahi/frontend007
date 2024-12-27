
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, IconButton, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import ticktok from '../assets/new.png';

const NavbarVariant2 = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AppBar
    position="static"
    sx={{
      background: "linear-gradient(to right, #C0C0C0, #000000)",  // Silver and black gradient
      color: "#fff",
      padding: "0 20px",
    }}
  >
    <Toolbar sx={{ justifyContent: "center", height: 70 }}>
      <IconButton edge="start" component={Link} to="/">
        <img src={ticktok} alt="TikTok" style={{ height: "80px" }} />
      </IconButton>
      <Box sx={{ position: "absolute", right: 20 }}>
        {user ? (
          <Button
            onClick={handleLogout}
            sx={{
              backgroundColor: "#222",
              color: "#fff",
              '&:hover': { backgroundColor: "#333" },
            }}
          >
            Logout
          </Button>
        ) : (
          <>
            <Button
              component={Link}
              to="/login"
              sx={{
                border: "1px solid white",
                color: "white",
                '&:hover': { backgroundColor: "rgba(255, 255, 255, 0.2)" },
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              sx={{
                backgroundColor: "#222",
                color: "#fff",
                '&:hover': { backgroundColor: "#444" },
                marginLeft: 1,
              }}
            >
              Register
            </Button>
          </>
        )}
      </Box>
    </Toolbar>
  </AppBar>
  
  );
};

export default NavbarVariant2;
