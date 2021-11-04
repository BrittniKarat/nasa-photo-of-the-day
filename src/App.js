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
  const [details, setDetails] = useState([]);
  
  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res)
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
         />
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
