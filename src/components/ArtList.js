import React from "react";
import { Card } from 'react-bootstrap';

const ArtList = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image_uri} />
      <Card.Body>
        <Card.Title>{item.name["name-USen"]}</Card.Title>
        <Card.Text>
          {item["museum-desc"]}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArtList;

// {item.image_uri}
// {item.name["name-USen"]}
// {item["museum-desc"]}