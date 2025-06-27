import React from "react";
import "../css/Widget.css";
import { useState } from "react";

function Widget(props) {

    const [isPopupVisible,setPopupVisible]=useState(false);
    const [selectedCategory,setSelectedCategory]=useState('All');
    const[searchQuery,setSearchQuery]=useState('');

    function showCategory(){
        setPopupVisible(true);
    }

    function hideCategory(){
        setPopupVisible(false);
    }

  return (
    <div className="widget-container">

      <div className="input-holder">
        <input
          type="text"
          name=""
          id=""
          className="search-bar"
          placeholder="Search for the name of bus service, flight or hotel service ..."
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={showCategory}
        />

        <input type="submit" value="Search" className="submit-btn" 
        onClick={()=>{props.onSubmit(selectedCategory,searchQuery);hideCategory()}}/>

        { isPopupVisible && (

        <section className="category-holder">
          <input type="radio" name="category" id="Buses" value="Buses" 
          onChange={(e)=>{setSelectedCategory(e.target.value)}} 
          checked={selectedCategory==="Buses"}/>
          <label htmlFor="Buses">Buses</label>

          <input type="radio" name="category" id="Flights" value="Flights" 
          onChange={(e)=>{setSelectedCategory(e.target.value)}}
          checked={selectedCategory==="Flights"}/>
          <label htmlFor="Flights">Flights</label>

          <input type="radio" name="category" id="Hotels" value="Hotels" 
          onChange={(e)=>{setSelectedCategory(e.target.value)}}
          checked={selectedCategory==="Hotels"}/>
          <label htmlFor="Hotels">Hotels</label>

          <input type="radio" name="category" id="All" value="All" 
          onChange={(e)=>{setSelectedCategory(e.target.value)}}
          checked={selectedCategory==="All"}/>
          <label htmlFor="All">All</label>
        </section>
        
        )}

      </div>
    </div>
  );
}

export default Widget;
