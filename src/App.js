import "./App.css";
import axios from "axios";
import Header from "./components/TheHeader/Head";
import React, { useState, useEffect } from "react";

function App() {
  const apiKey = "LWqkJeogF0XlRhW24JU14v9sfWMelIH0BS97ldGZ";
  const [image, setImage] = useState('');
  const [date, setDate] = useState(new Date(2019, 8, 26));


  useEffect(() => {
    async function getImage(dateObj) {
      const dateStr = date.toJSON().slice(0,10);
      try {
        const imgHandle = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateStr}`);
        setImage(imgHandle.data);
      } catch (err) {
        console.log(err);
      }
    }
    getImage(date);
  }, [date])

  const dateHandle = (change) => {
    if (change === "left") {
      setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
    } else if (change === "right") {
      setDate(new Date(date.getFullYear(), date.getMonth(), 1 + date.getDate()));
    } else {
      setDate(new Date(change.slice(0,4), parseInt(change.slice(5,7)), parseInt(change.slice(8,10))));
    }
  }

  return (
    <div className="App">
      <h1>  WELCOME TO NASA'S PHOTO OF THE DAY</h1>
      <Header image={image} date={date.toJSON().slice(0,10)} func={dateHandle}/>
      <span>Today's Image is By: {image.copyright ? image.copyright : "Public Domain"} </span>
    </div>
  );
}

export default App;
