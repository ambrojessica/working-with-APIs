import React from "react";
import { Container, Row } from "react-bootstrap";
import ArtCard from './ArtCard';

const DisplayingArt = ({ items }) => {

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

export default DisplayingArt;


// {
//   items.map((item) => (
//     <VillagerList item={item} key={item.id} />
//   ))
// }
