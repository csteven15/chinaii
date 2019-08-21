import React, { useReducer, useEffect } from 'react';
import Category from './Category';
import { Tab, Segment } from 'semantic-ui-react';
import fire from '../fire';

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
  activeItem: 'mainMenu'
};

function Menu() {

  const [state, dispatch] = useReducer(menuReducer, initialState);
  const { menu } = state;

  useEffect(() => {
    fire.database().ref('/menu').once('value').then(function (snapshot) {
      const menuData = snapshot.toJSON();
      dispatch({ type: 'loading', payload: menuData });
    })
  }, [])

  const createMenu = (query) => {
    let categories = [];
    for (let i in query) {
      categories.push(
        <Category key={i} data={query[i]} />
      );
    }
    return categories;
  }

  let panes = [];

  if (menu !== null) {
    panes = [
      { menuItem: 'Main Menu', render: () => <Tab.Pane attached={false}>{createMenu(menu['mainMenu'])}</Tab.Pane> },
      { menuItem: 'Lunch', render: () => <Tab.Pane attached={false}>{createMenu(menu['lunch'])}</Tab.Pane> },
      { menuItem: 'Special Combinations', render: () => <Tab.Pane attached={false}>{createMenu(menu['specialCombination'])}</Tab.Pane> },
      { menuItem: 'China II Specials', render: () => <Tab.Pane attached={false}>{createMenu(menu['chinaIISpecial'])}</Tab.Pane> },
      { menuItem: 'Specialties', render: () => <Tab.Pane attached={false}>{createMenu(menu['specialties'])}</Tab.Pane> },
      { menuItem: 'Diet', render: () => <Tab.Pane attached={false}>{createMenu(menu['diet'])}</Tab.Pane> }
    ]
  }
  
  return (
    <Segment>
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    </Segment>
  );
}

export default Menu;
