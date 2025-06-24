import React from "react";
import "../css/Widget.css";
import { useState } from "react";

function Widget() {

    const [isPopupVisible,setPopupVisible]=useState(false);

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
          onFocus={showCategory}
        />
        <input type="submit" value="Search" className="submit-btn" onClick={hideCategory}/>

        { isPopupVisible && (

        <section className="category-holder">
          <input type="radio" name="category" id="Buses" value="Buses" />
          <label htmlFor="Buses">Buses</label>
          <input type="radio" name="category" id="Flights" value="Flights" />
          <label htmlFor="Flights">Flights</label>
          <input type="radio" name="category" id="Hotels" value="Hotels" />
          <label htmlFor="Hotels">Hotels</label>
          <input type="radio" name="category" id="All" value="All" />
          <label htmlFor="All">All</label>
        </section>
        )}

      </div>
    </div>
  );
}

export default Widget;
