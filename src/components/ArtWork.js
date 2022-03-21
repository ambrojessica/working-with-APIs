import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const ArtWork = ({ items }) => {

  return (
    <main>
      {items.map((item) => (
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={item.image_uri} />
                <Card.Body>
                  <Card.Title>{item.name["name-USen"]}</Card.Title>
                  <Card.Text>
                    {item["museum-desc"]}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </main>

  );
};

export default ArtWork;


// {
//   items.map((item) => (
//     <VillagerList item={item} key={item.id} />
//   ))
// }
