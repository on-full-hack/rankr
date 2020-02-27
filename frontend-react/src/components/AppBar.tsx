import React from 'react';
import { AppBar as AppBarMUI, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const AppBar = () => {
  const styles = useStyles();
  return (
    <AppBarMUI position="static">
      <Toolbar className={styles.container}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Rankr</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBarMUI>
  );
};
