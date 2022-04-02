import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import ArtWork from "./components/ArtWork";
import Search from './components/Search';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://acnhapi.com/v1a/art`);

      setItems(result.data);
      // console.log(result);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      <ArtWork items={items} />
    </div>
  );
};

export default App;
