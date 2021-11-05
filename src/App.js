import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import "./App.css";
import "./components/all.css"

// importing api key
import { API_KEY, BASE_URL } from "./Constants/index";

// importing children 
import Header from "./components/header";
import NasaPhoto from "./components/nasaphoto";
import InfoSection from "./components/info"
import CalendarSection from "./components/calendar"
import Footer from "./components/footer";
import styled from "styled-components";


function App() {
  const [details, setDetails] = useState([]);
  
  useEffect( () => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        setDetails(res.data)
          })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <NasaPhoto title={details.title} photo={details.url}/>
      <InfoSection 
        date={details.date}  
        explanation={details.explanation} 
        title={details.title}
        copyright={details.copyright}
         />
      {/* <CalendarSection />
      <Footer /> */}

    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
