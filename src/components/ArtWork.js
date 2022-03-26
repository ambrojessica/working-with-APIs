import React from "react";
import ArtList from './ArtList';

const ArtWork = ({ items }) => {

  return (
    <main>
      {
        items.map((item) => (
          <ArtList item={item} key={item.id} />
        ))
      }
    </main>

  );
};

export default ArtWork;


// {
//   items.map((item) => (
//     <VillagerList item={item} key={item.id} />
//   ))
// }
