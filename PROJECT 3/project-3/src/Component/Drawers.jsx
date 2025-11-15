import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Drawers() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex justify-center my-20'>
      {/* Example button to open the drawer */}
      <button
        className="px-3 py-2 bg-blue-500 text-white rounded"
        onClick={() => setOpen(true)}
      >
        Open Drawer
      </button>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box className="w-64" role="presentation" onClick={() => setOpen(false)}>
          <List>
            <ListItem button>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

