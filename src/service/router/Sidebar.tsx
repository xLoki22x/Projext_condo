import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Button } from '@mui/material';
import { Inbox, Mail, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleCollapse = () => {
    setOpen(!open);
  };

  const Back = () => {
    Swal.fire({
      text: 'OK '
    }).then((e: any) => {
      if (e.isConfirmed) {
        navigate('/', { replace: true })
        sessionStorage.clear()
      }
    })
  }

  const navigate = useNavigate();

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
              <Button onClick={() => Back()}>
                <Link to={'/root/dashbord'}>
                  <ListItemText primary="Submenu Item 2" />
                </Link>
              </Button>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
