import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, Container } from 'reactstrap';
import { Breakpoint } from "react-socks";
import fire from '../fire';

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

function Gallery(props) {

  const [imageData, setImageData] = useState([]);
  const [map, setMap] = useState({});

  useEffect(() => {
    async function getImageURLS() {
      let storageRef = fire.storage().ref();
      let imageRef = storageRef.child('gallery');    
      let imageList = await imageRef.listAll();

      let databaseRef  = fire.database().ref('files');
      databaseRef.on('value', function(snapshot) {
        setMap(snapshot.val());
      });

      imageList.items.map(async function(item) {
        let imageData = {
          url: await item.getDownloadURL(),
          name: item.name.split('.')[0]
        }
        setImageData(oldImageData => [...oldImageData, imageData]);
      });
    }
    getImageURLS();
  }, []);

  function displayImages(n) {
    if (imageData.length && Object.keys(map).length === imageData.length) {
      let imageArray = imageData.map((data) => 
        ({
          src: data.url,
          thumbnail: data.url,
          thumbnailWidth: 300,
          thumbnailHeight: 300,
          caption: map[data.name],
          thumbnailCaption: map[data.name]
        })
      );
      return splitEvery(imageArray, n).map((itemsChunk) => (
        <Row key={Math.random()}>
          {
            itemsChunk.map(item => (
              <Col key={item.caption} xs={{ size: 12/ n }}>
                <Card >
                  <CardImg width="100%" src={item.src} alt={item.caption} />
                  <CardBody>
                    <CardText>{item.caption}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      ));
    }
    return null;
  }
  
  return (
    <Container>
      <br />
      <Breakpoint medium down>
          {
            displayImages(2)
          }
        </Breakpoint>
        <Breakpoint medium up>
          {
            displayImages(4)
          }
        </Breakpoint>
        <br />
    </Container>
  );
}


export default Gallery;
