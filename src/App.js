import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import DisplayArt from "./components/DisplayArt";
import Search from './components/Search';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://acnhapi.com/v1a/art?limit=10`);

      setItems(result.data);
      // console.log(result);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      {/* TODO: add Routing */}
      <Header />
      {/* TODO: fix search and make it take up the whole screen? */}
      <Search />
      <DisplayArt items={items} />
    </div>
  );
};

export default App;
