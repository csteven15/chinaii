import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breakpoint } from "react-socks";
import Item from './Item';

function splitEvery(object, length) {
  let array = [];
  for (let i in object) {
    array.push(object[i]);
  }

  return array.reduce(
    (result, item, index) => {
      if (index % length === 0)
        result.push([])
      result[Math.floor(index / length)].push(item)
      return result
    },
    []
  )
};

function Category(props) {
  const { name, items, description } = props.data;

  function splitCols(n) {
    return (
      splitEvery(items, n).map((itemsChunk, i) => (
        <Row key={Math.random()}>
          {
            itemsChunk.map(item => (
              <Col key={item.name + Math.random()} xs={{ size: 12/ n }}>
                <Item data={item} />
              </Col>
            ))
          }
        </Row>
      ))
    )
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h5 className="mb-0">{ name }</h5>
            { description ? <p  className="mb-0" style={{ fontSize: `10px` }}>({description})</p> : null }
          </Col>
        </Row>
        <Breakpoint medium down>
          {
            splitCols(2)
          }
        </Breakpoint>
        <Breakpoint medium up>
          {
            splitCols(3)
          }
        </Breakpoint>
      </Container>
      <hr />
    </React.Fragment>
  );
}
export default Category;
