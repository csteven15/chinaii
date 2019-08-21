import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';

const Home = (props) => {
  return (
    <React.Fragment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Trust earned through 15+ years of service
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We have served our loyal customers for 15+ years. Come and be a part of the family.
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                New York Style Chinese Restaurant
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Yes that's right, our food is served New York style, giving a taste of New York. Our menu consists of a huge variety of food, ranging from our famous egg rolls to our most popular dish, General Tso Chicken.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='https://loremflickr.com/640/360' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>Check out our Menu</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>Œ
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "I always find myself coming back"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image avatar src='https://loremflickr.com/640/360' />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "Customer service is always top notch."
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image avatar src='https://loremflickr.com/640/360' />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Our Menu
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Our menu consists of a huge variety of food, ranging from our famous egg rolls to our most popular dish, General Tso Chicken.
          </p>
          <Button as='a' size='large'>
            Read More
          </Button>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Case Studies</a>
          </Divider>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
            it's really true. It took years of gene splicing and combinatory DNA research, but our
            bananas can really dance.
          </p>
          <Button as='a' size='large'>
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </React.Fragment>
  );
}

export default Home;
