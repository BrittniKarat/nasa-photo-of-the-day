import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import "./App.css";
import "./components/all.css"

// importing children 
import Header from "./components/header";
import NasaPhoto from "./components/nasaphoto";
import InfoSection from "./components/info"
import CalendarSection from "./components/calendar"
import Footer from "./components/footer";

function App() {
  const [date, setDate] = useState(null);
  const [photo, setphoto] = useState(null);

  axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      console.log(res)
      res
    })
    .catch(err => {
      console.error(err)
    })

  return (
    <div className="App">
      <Header />
      <NasaPhoto />
      <InfoSection />
      <CalendarSection />
      <Footer />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
