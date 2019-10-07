import React from 'react';
import Category from './Category';
import { Segment, Loader } from 'semantic-ui-react';

function SubMenu(props) {

  const createMenu = (query) => {
    let categories = [];
    if (props.menu[props.category]) {
      for (let i in query) {
        categories.push(
          <Category key={i} data={query[i]} />
        );
      }
    }
    return categories;
  }


  return (
    <Segment>
      {
        props.menu === null ? <Loader active inline="centered" /> : createMenu(props.menu[props.category])
      }
    </Segment>
  );
}

export default SubMenu;
