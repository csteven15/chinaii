import React from 'react';
import { Segment, Image, Header } from 'semantic-ui-react';

const Gallery = (props) => {
  let src ='http://lorempixel.com/400/200/food/1/';
  let imageGroup = [];
  let i = 0;
  for (i = 0; i < 10; i++) {
    src = `http://lorempixel.com/400/200/food/${i}/`;
    imageGroup.push(<Image src={src} key={i}/>)
  }
  return (
    <Segment>
      <Header as='h2'>
        Gallery
      </Header>
      <Image.Group size='small'>
        { imageGroup }
      </Image.Group>
    </Segment>
  );
}


export default Gallery;
