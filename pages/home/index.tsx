import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Jumbotron, Container, Row, Col, Media, Button } from 'reactstrap'

const GoogleMaps = dynamic(() => import('../../components/google_maps'), {
  ssr: false
})

export default function Home(props) {
  const styles = {
    jumbotron: {
      background: `url('/images/chopsticks.webp') no-repeat center center fixed`,
      backgroundSize: `cover`,
      textAlign: `center`,
      color: `#fff`,
      textShadow: `2px 2px #000`
    },
  }

  return (
    <>
      <Head>
        <title>China II - Home</title>
      </Head>
      <Jumbotron fluid style={styles.jumbotron}>
        <h3>
          Best New York Style Chinese Take Out in Sanford, FL.
          </h3>
      </Jumbotron>
      <Container>
        <Row className="align-items-center text-center">
          <Col xs={12} sm={6} className="font-weight-bold">
            <h4>Trust earned through 15+ years of service</h4>
            <p>We have served our loyal customers for 15+ years. Come and be a part of the family.</p>
            <h4>New York Style Chinese Restaurant</h4>
            <p>Yes that's right, our food is served New York style, giving a taste of New York. It consists of a huge variety of food, ranging from our famous egg rolls to our most popular dish, General Tso Chicken.</p>
          </Col>
          <Col xs={12} sm={6} style={{ textAlign: 'center' }}>
            <Media src='/images/collage.webp' alt="collage" className="w-75 mx-auto" />
            <Link href="/gallery"><Button color="dark" className="my-2 font-weight-bold">
              View our full Gallery
            </Button></Link>
          </Col>
        </Row>
      </Container>
      <br />
      <Container className="text-center py-2">
        <Link href="/menu">
          <Button size="lg" color="dark" className="font-weight-bold">
            View our full menu
              </Button>
        </Link>
      </Container>
      <br />
      <GoogleMaps />
    </>
  )
}