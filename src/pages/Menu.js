import React, { useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import fire from '../fire';
import { Segment } from 'semantic-ui-react';

const SubMenu = React.lazy(() => import('../components/SubMenu'));

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
  }, []);

  console.log(menu)
  
  return (
    <Segment>
      <Switch>
        <Route exact path='/menu-main' render={props => <SubMenu menu={menu} category="mainMenu" />} />
        <Route exact path='/menu-lunch' render={props => <SubMenu menu={menu} category="lunch" />} />
        <Route exact path='/menu-combo' render={props => <SubMenu menu={menu} category="specialCombination" />} />
        <Route exact path='/menu-specials' render={props => <SubMenu menu={menu} category="chinaIISpecial" />} />
        <Route exact path='/menu-specialties' render={props => <SubMenu menu={menu} category="specialties" />} />
        <Route exact path='/menu-diet' render={props => <SubMenu menu={menu} category="diet" />} />
      </Switch>
    </Segment>
  );
}

export default Menu;
