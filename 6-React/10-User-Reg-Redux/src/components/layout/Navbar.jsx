import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  p: {
    flexGrow: 2
  }
}));

const Navbar = ({ title, titleSub }) => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <AppBar title='Success'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.p}>{titleSub}</Typography>
          <Button href='/' color='inherit'>
            Home
          </Button>{' '}
          <Button href='/search' color='inherit'>
            Search
          </Button>{' '}
          <Button href='/regform' color='inherit'>
            Sign up!
          </Button>
        </Toolbar>
      </AppBar>
    </nav>
  );
};
//defining a default props
Navbar.defaultProps = {
  title: 'User-Search-Reg-Redux'
};

//defining the type of my props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
