import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Villagers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://acnhapi.com/v1/villagers')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return (
    <div>
      <p>hi</p>
    </div>
  );
}

export default Villagers;