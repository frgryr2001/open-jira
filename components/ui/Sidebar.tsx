import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useContext } from "react";
import { UIContext } from "../../context/ui";
const menuItems: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);
  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item} button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailOutlineIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
