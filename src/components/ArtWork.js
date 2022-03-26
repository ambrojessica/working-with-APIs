import React from "react";
import { CardGroup } from "react-bootstrap";
import ArtList from './ArtList';

const ArtWork = ({ items }) => {

  return (
    <CardGroup style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {
        items.map((item) => (
          <ArtList item={item} key={item.id} />
        ))
      }
    </CardGroup>

  );
};

export default ArtWork;


// {
//   items.map((item) => (
//     <VillagerList item={item} key={item.id} />
//   ))
// }
