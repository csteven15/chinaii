import React, { useState, useReducer, useEffect } from 'react';
import { Nav, Navbar, NavLink, NavItem, TabContent, TabPane, UncontrolledAlert } from 'reactstrap';
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
      name: 'Lunch Specials'
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
      <nav className="bg-dark text-light">
        <Navbar dark expand="md">
            <Nav className="mr-auto" navbar>
              {
                menuCategories.map(cat => (
                  <NavItem key={cat.name}>
                    <NavLink
                      className={classnames({ active: activeTab === cat.category })}
                      onClick={() => { toggle(cat.category); }}
                      style={{ cursor: 'pointer' }}
                    >
                      {activeTab === cat.category ? <strong>{cat.name}</strong> : cat.name}
                    </NavLink>
                  </NavItem>
                ))
              }
            </Nav>
        </Navbar>
      </nav>
      <UncontrolledAlert color="warning" className="mb-0" style={{ textAlign: "center", fontSize: "0.8em" }}>
      Prices online may not reflect actual prices. Please visit store for more accurate prices.
      </UncontrolledAlert>
      {
        menuCategories.map(cat => (
          <TabContent activeTab={activeTab} key={cat.name}>
            <TabPane tabId={cat.category}>
              {menu !== null && createMenu(menu[cat.category])}
            </TabPane>
          </TabContent>
        ))
      }
    </div>
  );
}

export default Menu;
