import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UIContext } from "../../context/ui";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6">Open Jira</Typography>
      </Toolbar>
    </AppBar>
  );
};
