import React, {useState} from "react";

function NewPlantForm({onFormSubmit}) {

  const [formData,setFormData]=useState({
    name:"",
    image:"",
    price:""
  })

  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  
  function onNewPlant(event){
    event.preventDefault()
    fetch("http://localhost:6001/plants",{
      method:"POST",
      headers:{
        "Content-type": "application/json",
      },
      body:JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((newPlant)=>onFormSubmit(newPlant))
  }
  
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onNewPlant}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
