import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({listings, onFormSubmit}) {
  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit}/>
      <Search />
      <PlantList listings={listings}/>
    </main>
  );
}

export default PlantPage;
