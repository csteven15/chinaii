import React, { useState, Fragment, useReducer, useEffect } from 'react';
import Category from './Category';
import { Paper, Tabs, Tab, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import fire from '../fire';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function menuReducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        menu: action.payload
      };
    default:
      return state;
  }
}

const initialState = {
  menu: null,
};
function Menu() {
  const [value, setValue] = useState(0);

  const [state, dispatch] = useReducer(menuReducer, initialState);
  const { menu } = state;

  console.log(menu)

  useEffect(() => {
    fire.database().ref('/menu').once('value').then(function (snapshot) {
      const menuData = snapshot.toJSON();
      dispatch({ type: 'loading', payload: menuData });
    })
  }, [])

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const createMenu = (query) => {
    if (query != null) {
      let categories = [];
      for (let i in query) {
        categories.push(
          <Category key={i} data={query[i]} />
        );
      }
      return categories;
    }

  }

  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline/>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollable="true"
          scrollButtons="on"
        >
          <Tab label="Main Menu" />
          <Tab label="Lunch" />
          <Tab label="Special Combinations" />
          <Tab label="China II Specials" />
          <Tab label="Specialties" />
          <Tab label="Diet" />
        </Tabs>
        {menu !== null && value === 0 && <Fragment>{createMenu(menu['mainMenu'])}</Fragment>}
        {menu !== null && value === 1 && <Fragment>{createMenu(menu['lunch'])}</Fragment>}
        {menu !== null && value === 2 && <Fragment>{createMenu(menu['specialCombination'])}</Fragment>}
        {menu !== null && value === 3 && <Fragment>{createMenu(menu['chinaIISpecial'])}</Fragment>}
        {menu !== null && value === 4 && <Fragment>{createMenu(menu['specialties'])}</Fragment>}
        {menu !== null && value === 5 && <Fragment>{createMenu(menu['diet'])}</Fragment>}
      </Paper>
    </Fragment>
  );
}

export default Menu;
