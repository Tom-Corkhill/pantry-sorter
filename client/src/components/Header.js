import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(0),
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white'
  },
  bar: {
    backgroundColor: '#6f98a3'
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <a className={classes.title} href="/">PANTRY SORTER</a>
          </Typography>
          <Button color="inherit"><a className="anchorText" href="/pantry">Pantry</a></Button>
          <Button color="inherit"><a className="anchorText" href="/favourites">Favourites</a></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}