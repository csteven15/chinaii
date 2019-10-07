import React from 'react';
import Item from './Item';
import { Header, Divider, Grid } from 'semantic-ui-react';
import { Breakpoint } from "react-socks";

const splitEvery = (object, length) => {

  let array = [];
  for (let i in object) {
    array.push(object[i]);
  }

  return array.reduce(
    (result, item, index) => {
      if (index % length === 0) result.push([])
      result[Math.floor(index / length)].push(item)
      return result
    },
    []
  )
}

function Category(props) {
  
  const { name, items, description } = props.data;

  return (
    <React.Fragment>
      <Header as='h2'>
        { name }
      </Header>
      { description ? <Header as='h6'>{description}</Header> : null }
      <Divider clearing />
      <Breakpoint small down>
        <Grid columns='two' divided>
          {
            splitEvery(items, 2).map((itemsChunk, i) => (
              <Grid.Row key={Math.random()}>
                {
                  itemsChunk.map(item => (
                    <Grid.Column key={item.name + Math.random()}>
                      <Item data={item} />
                    </Grid.Column>
                  ))
                }
              </Grid.Row>
            ))
          }
        </Grid>
      </Breakpoint>
      <Breakpoint medium up>
        <Grid columns='three' divided>
          {
            splitEvery(items, 3).map((itemsChunk, i) => (
              <Grid.Row key={Math.random()}>
                {
                  itemsChunk.map(item => (
                    <Grid.Column key={item.name + Math.random()}>
                      <Item data={item} />
                    </Grid.Column>
                  ))
                }
              </Grid.Row>
            ))
          }
        </Grid>
      </Breakpoint>
    </React.Fragment>
  );
}

export default Category;
