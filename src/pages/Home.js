import React from "react";
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <React.Fragment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Trust earned through 15+ years of service
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We have served our loyal customers for 15+ years. Come and be a
                part of the family.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                New York Style Chinese Restaurant
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, our food is served New York style, giving a
                taste of New York. It consists of a huge variety of food,
                ranging from our famous egg rolls to our most popular dish,
                General Tso Chicken.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src={require('../images/noodles.jpg')}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button as={Link} to="/menu" size="huge">
                Check out our Menu
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "I always find myself coming back"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src="https://i.pravatar.cc/300?img=1" />
                <b>Anonymous</b>
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Customer service is always top notch."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src="https://i.pravatar.cc/300?img=7" />
                <b>Anonymous</b>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.8764127490654!2d-81.35540328516404!3d28.81275658234709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e70d76ecdf004d%3A0xda14e55ad1e99efe!2sChina+II!5e0!3m2!1sen!2sus!4v1566362218794!5m2!1sen!2sus" style={{ width: '100%', height: '25em' }}></iframe>
    </React.Fragment>
  );
};

export default Home;
