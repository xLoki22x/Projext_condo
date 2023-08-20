import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Inbox, Mail, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleCollapse = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" sx={{ width: 400 }}>
      <List>
        <ListItem button onClick={handleCollapse}>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>

          <ListItemText primary="Dropdown" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button style={{ paddingLeft: 40 }}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Submenu Item 1" />
            </ListItem>
            <ListItem button style={{ paddingLeft: 40 }}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <Link to={'/root/dashbord'}>
                <ListItemText primary="Submenu Item 2" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
