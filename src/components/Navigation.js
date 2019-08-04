import React, { useState } from 'react';
import { AppBar, Box, Button, CssBaseline, Drawer, Toolbar, IconButton, Typography, Hidden, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, Menu, Map, ContactSupport, PermMedia, Phone, DirectionsCar } from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    zIndex: 0,
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    zIndex: theme.zIndex.drawer + 1,
    height: '60px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
  },
  drawerText: {
    textDecoration: 'none',
    color: '#000',
  },
  drawerTitle: {
    height: '60px',
  }
}));

const Navigation = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { location } = props;
  const classes = useStyles();

  const paths = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/menu',
      name: 'Menu'
    },
    {
      path: '/gallery',
      name: 'Gallery'
    },
    {
      path: '/contact',
      name: 'Contact'
    }
  ]

  const assignNavIcons = (path) => {
    switch (path) {
      case '/':
        return <Home />
      case '/menu':
        return <Map />
      case '/gallery':
        return <PermMedia />
      case '/contact':
        return <ContactSupport />
      default:
        return null;
    }
  }

  const drawer = (
    <div>
      <Box>
        <ListItem className={classes.drawerTitle}>
          <Button
            href="tel:123-123-1234"
          >
            <Typography variant="body1" color="inherit" >
              Call
            </Typography>
            <Phone />
          </Button>
          <Button
            href="https://goo.gl/maps/aAiGk53wMpBvz9oC7"
          >
            <Typography variant="body1" color="inherit" >
              Directions
            </Typography>
            <DirectionsCar />
          </Button>
        </ListItem>
      </Box>
      {/* <Box borderTop={1} borderColor="grey.500"> */}
      <List>
        {
          paths.map((nav) => (
            <Link
              to={nav.path}
              onClick={() => {
                if (mobileOpen === true) {
                  setMobileOpen(!mobileOpen);
                }
              }}
              className={classes.drawerText}
              key={nav.name}
            >
              <ListItem
                button
                selected={location.pathname === nav.path}
              >
                <ListItemIcon>
                  {assignNavIcons(nav.path)}
                </ListItemIcon>
                <ListItemText primary={nav.name} />
              </ListItem>
            </Link>
          ))
        }
      </List>
      {/* </Box> */}
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            China II
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={props.container}
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(Navigation);