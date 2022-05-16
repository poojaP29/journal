import React from "react";
import './App.css';
import Navbar from './Navbar';
import Travel from './Travel';
import Traveldetails from "./Traveldetails";

export default function App() {
  const details=Traveldetails.map(data=>{
    return(
       <Travel
            img={data.image}
            location={data.location}
            title={data.title}
            Date={data.Date}
            description={data.description}
        />
    )
  })
  return (
    <div className="App">
        <Navbar />
        <section className="travelList">{details}</section>
    </div>
  );
}