import React from "react";
import { Alert, Card, Col } from 'react-bootstrap';

const ArtCard = ({ item }) => {
  return (
    <Col md={3} >
      <Card>
        {/* TODO: wrap in Link */}
        <Card.Img variant="top" src={item.image_uri} width="100px" height="100px" className="object-cover" />
        <Card.Body>
          {/* TODO: wrap in Link */}
          <Card.Title>{item.name["name-USen"]}</Card.Title>
          <Card.Text className="h-75 overflow-hidden text-truncate">{item["museum-desc"]}</Card.Text>
          <div style={{ minHeight: "80px" }}>
            {item.hasFake &&
              (<Alert variant="danger">
                Has other Fakes!
              </Alert>)}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArtCard;

// {item.image_uri}
// {item.name["name-USen"]}
// {item["museum-desc"]}
// {item.hasFake}