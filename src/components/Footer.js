import React from 'react';
import { Segment, Table, Container } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical textAlign='center'>
    <Container>
      <Table basic inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Day</Table.HeaderCell>
            <Table.HeaderCell>Hours</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Monday - Thursday</Table.Cell>
            <Table.Cell>10:00 AM - 10:00 PM</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Friday - Saturday</Table.Cell>
            <Table.Cell>10:00 AM - 10:30 PM</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Sunday</Table.Cell>
            <Table.Cell>12:00 PM - 9:30 PM</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
    <br />
    &copy; 2019 China II
  </Segment>
);

export default Footer;