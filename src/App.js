import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import { event_data } from "./data/event_data";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filterEvent, setFilterEvent] = useState(event_data);

  function changeCountry(country) {
    setFilterEvent(
      event_data.filter((event) => event.country_name === country)
    );
    setSelectedCountry(country);
  }

  return (
    <div className="container">
      <Header />
      <div className="main-structure">
        <Sidebar
          changeCountry={changeCountry}
          selectedCountry={selectedCountry}
        />
        <MainContent event={filterEvent} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
