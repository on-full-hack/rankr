import React, { useState } from 'react';
import {
  AppBar as AppBarMUI,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/InboxOutlined';

const navigationItems = [
  {
    label: 'Home',
    route: '/',
    Icon: InboxIcon,
  },
  {
    label: 'Leagues',
    route: '/leagues',
    Icon: InboxIcon,
  },
];

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  list: {
    width: 250,
  },
});

export const AppBar = () => {
  const styles = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  return (
    <>
      <AppBarMUI position="static">
        <Toolbar className={styles.container}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Rankr</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBarMUI>
      <Drawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className={styles.list} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navigationItems.map(({ label, Icon, route }) => (
              <ListItem button key={label} onClick={() => history.push(route)}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};
