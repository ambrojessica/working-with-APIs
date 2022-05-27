import React from "react";
import { Container, Row } from "react-bootstrap";
import ArtCard from './ArtCard';

// TODO: fix names lol
const DisplayArt = ({ items }) => {

  return (
    <Container>
      <Row className="flex-wrap g-4">
        {
          items.map((item) => (
            <ArtCard item={item} key={item.id} />
          ))
        }
      </Row>
    </Container>
  );
};

export default DisplayArt;


// {
//   items.map((item) => (
//     <VillagerList item={item} key={item.id} />
//   ))
// }
