import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Item from './item'

function Category(props) {
  const { name, items, description } = props.data
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h5 className="mb-0">{name}</h5>
            {description ? <p className="mb-0" style={{ fontSize: `10px` }}>({description})</p> : null}
          </Col>
        </Row>
        <Row xs={2} sm={3} md={4}>
          {
            Object.values(items).map(item => (
              <Col key={item['name'] + Math.random()}>
                <Item data={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
      <hr />
    </>
  )
}
export default Category
