import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./App.css";

// importing children 
import Header from "./components/header";
import NasaPhoto from "./components/nasaphoto";
import InfoSection from "./components/info"
import CalendarSection from "./components/calendar"
import FooterSection from "./components/footer"

function App() {
  const [date, setDate] = useState(null);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
