import React from 'react';
import { Jumbotron, Container, Row, Col, Media, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home(props) {
  const styles = {
    jumbotron: {
      background: `url(${require('./../images/wallpaper.jpg')}) no-repeat center center fixed`,
      backgroundSize: `cover`,
      textAlign: `center`,
      color: `#fff`,
      textShadow: `2px 2px #000`
    },
  };

  return (
    <div>
      <Jumbotron fluid style={styles.jumbotron}>
        <h3>
          Best New York Style Chinese Take Out in Sanford, FL.
        </h3>
      </Jumbotron>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="font-weight-bold">
            <h4>Trust earned through 15+ years of service</h4>
            <p>We have served our loyal customers for 15+ years. Come and be a part of the family.</p>
            <h4>New York Style Chinese Restaurant</h4>
            <p>Yes that's right, our food is served New York style, giving a taste of New York. It consists of a huge variety of food, ranging from our famous egg rolls to our most popular dish, General Tso Chicken.</p>
          </Col>
          <Col xs={12} sm={6} style={{textAlign: 'center'}}>
            <Media src={require('./../images/collage.jpg')} alt="Generic placeholder image" className="w-75 mx-auto" />
            <Button color="dark" tag={Link} to="/gallery" className="my-2 font-weight-bold">
              View our full Gallery
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <Container className="text-center py-2">
        <Button size="lg" color="dark" tag={Link} to="/menu" className="font-weight-bold">
          View our full menu
        </Button>
      </Container>
      <br />
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.8764127490654!2d-81.35540328516404!3d28.81275658234709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e70d76ecdf004d%3A0xda14e55ad1e99efe!2sChina+II!5e0!3m2!1sen!2sus!4v1566362218794!5m2!1sen!2sus" style={{ width: '100%', height: '25em' }}></iframe>
    </div>
  );
}
export default Home;
