import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import DisplayingArt from "./components/DisplayArt";
import { Card } from 'react-bootstrap';

// import Search from './components/Search';

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
      <Card className="text-center text-white m-5">
        <Card.Img src="https://images.unsplash.com/photo-1593016250787-edf25b355001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Card image" width="95" height="600" />
        <Card.ImgOverlay>
          <Card.Title>Art Work</Card.Title>
        </Card.ImgOverlay>
      </Card>
      {/* <Search /> */}
      <DisplayingArt items={items} />
    </div>
  );
};

export default App;
