import React from 'react'
import Head from 'next/head'
import { Row, Col, Card, CardImg, CardText, CardBody, Container } from 'reactstrap'
import * as xhr2 from 'xhr2'

import fire from './../../firebase/fire'

export async function getStaticProps(context) {
  global.XMLHttpRequest = xhr2

  let storageRef = fire.storage().ref()
  let imageList = await storageRef.child('gallery').listAll()

  let databaseRef = fire.database().ref('files')
  let mapData = await (await databaseRef.once('value')).val()

  let imageURLPromieses = await imageList.items.map(async (item) => await item.getDownloadURL())

  let imageData = await Promise.all(imageURLPromieses)

  let images = await Promise.all(imageList.items.map(async (item, i) => ({ url: imageData[i], name: mapData[item.name.split('.')[0]] })))

  return {
    props: {
      data: images
    }
  }
}

export default function Gallery({ data }) {

  return (
    <>
      <Head>
        <title>China II - Gallery</title>
      </Head>
      <Container>
        <Row xs="2" sm="3" md="4">
          {
            data.map((image) =>
              <Col key={image.name} className="my-4">
                <Card>
                  <CardImg width="100%" src={image.url} alt={image.name} />
                  <CardBody className="text-center">
                    <CardText style={{ fontSize: "14px" }}>{image.name}</CardText>
                  </CardBody>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    </>
  )
}