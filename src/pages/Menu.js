import React, { useState, useReducer, useEffect } from 'react';
import { Nav, NavLink, NavItem, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Category from './../components/Category';
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

  const [activeTab, setActiveTab] = useState('mainMenu');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const menuCategories = [
    {
      category: 'mainMenu',
      name: 'Main Menu'
    },
    {
      category: 'lunch',
      name: 'Lunch'
    },
    {
      category: 'specialCombination',
      name: 'Special Combinations'
    },
    {
      category: 'chinaIISpecial',
      name: 'China II Specials'
    },
    {
      category: 'specialties',
      name: 'Specialties'
    },
    {
      category: 'diet',
      name: 'Diet'
    }
  ]

  return (
    <div>
      <Nav tabs>
        {
          menuCategories.map(cat => (
            <NavItem key={cat.name}>
              <NavLink
                className={classnames({ active: activeTab === cat.category })}
                onClick={() => { toggle(cat.category); }}
                style={{ cursor: 'pointer' }}
              >
                {cat.name}
              </NavLink>
            </NavItem>
          ))
        }
      </Nav>
      {
        menuCategories.map(cat => (
          <TabContent activeTab={activeTab} key={cat.name}>
            <TabPane tabId={cat.category}>
              {menu !== null && createMenu(menu[cat.category])}
              <p>Prices online may not reflect actual prices. Please visit store for more accurate prices.</p>
            </TabPane>
          </TabContent>
        ))
      }
    </div>
  );
}

export default Menu;
