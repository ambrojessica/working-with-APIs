import React from "react";
import ArtList from './ArtList';

const ArtWork = ({ items }) => {

  return (
    <div>
      {
        items.map((item) => (
          <ArtList item={item} key={item.id} />
        ))
      }
    </div>

  );
};

export default ArtWork;


// {
//   items.map((item) => (
//     <VillagerList item={item} key={item.id} />
//   ))
// }