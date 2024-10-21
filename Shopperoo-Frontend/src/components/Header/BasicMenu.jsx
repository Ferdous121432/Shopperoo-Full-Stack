import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import cookie from "js-cookie";
import { useAuth } from "../../context/AuthProvider";
import UserAvatar from "../../reuseableComponents/UserAvatar";

export default function BasicMenu() {
  const { state, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    window.location.href = "/userprofile";
    handleClose();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href = "/signin";
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "#065f46" }}
        size="large"
      >
        {state.isAuthenticated ? (
          <UserAvatar />
        ) : (
          <AccountCircleIcon fontSize="large" />
        )}
      </Button>
      {state.isAuthenticated ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Order</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleProfileClick}>Login</MenuItem>
          <MenuItem onClick={handleClose}>Register</MenuItem>
        </Menu>
      )}
    </div>
  );
}
