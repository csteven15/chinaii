import React from 'react';
import { Segment, Table, Header, Grid } from 'semantic-ui-react';

const Contact = (props) => {
  return (
    <Segment>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2'>
              Business Hours
            </Header>
            <Table basic>
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
          </Grid.Column>
          <Grid.Column>
            <Header as='h2'>
              Location
            </Header>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.8764127490654!2d-81.35540328516404!3d28.81275658234709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e70d76ecdf004d%3A0xda14e55ad1e99efe!2sChina+II!5e0!3m2!1sen!2sus!4v1566362218794!5m2!1sen!2sus" style={{ width: '100%' }}></iframe>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}


export default Contact;
