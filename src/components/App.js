import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {


  const [listings,setListings]=useState([])

useEffect(()=>{
  fetch("http://localhost:6001/plants")
    .then((r)=>r.json())
    .then ((listings)=>setListings(listings))
},[])


function onFormSubmit(newPlant){
  setListings([...listings,newPlant])
}

  return (
    <div className="app">
      <Header />
      <PlantPage listings={listings} onFormSubmit={onFormSubmit}/>
    </div>
  );
}

export default App;
