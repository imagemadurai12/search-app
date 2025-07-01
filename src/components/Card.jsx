import React, { useEffect, useState } from "react";
import "../css/Card.css";

function Card(props) {
  const [number,setNumber] = useState(0);
  const [locations, setLocations] = useState([]);

  const getRoute = () => {
    const sroutes = {
      RT101: [
        "Tiruchendur",
        "Tuticorin",
        "Madurai",
        "Trichy",
        "Perungulathur",
        "Chennai",
      ],
      RT102: [
        "Tiruchendur",
        "Tuticorin",
        "Madurai",
        "Karur",
        "Salem",
        "Hosur",
        "Bengaluru",
      ],
      RT103: ["Tirunelveli", "Madurai", "Trichy", "Perungulathur", "Chennai"],
      RT104: ["Tuticorin", "Madurai", "Salem", "Coimbatore"],
      RT105: [
        "Coimbatore",
        "Erode",
        "Salem",
        "Dharmapuri",
        "Hosur",
        "Bengaluru",
      ],
      RT106: [
        "Coimbatore",
        "Erode",
        "Salem",
        "Viluppuram",
        "Tindivanam",
        "Chennai",
      ],
      RT107: ["Goa", "Belgaum", "Kolhapur", "Satara", "Pune", "Mumbai"],
      RT108: ["Mumbai", "Vadodara", "Udaipur", "Jaipur", "New Delhi"],
      RT109: ["Chennai", "Nellore", "Ongole", "Hyderabad"],
      RT110: [
        "Bengaluru",
        "Dharmavaram",
        "Anantapur",
        "Mahbubnagar",
        "Hyderabad",
      ],
      RT201: ["Tuticorin, India", "Chennai, India"],
      RT202: ["Madurai, India", "Chennai, India"],
      RT203: ["Madurai, India", "Bengaluru, India"],
      RT210: ["Chennai, India", "Doha, Qatar"],
      RT211: ["Mumbai, India", "Doha, Qatar"],
      RT212: ["Bengaluru, India", "Doha, Qatar"],
      RT220: ["New Delhi, India", "Dubai, UAE", "New York, USA"],
      RT221: ["Mumbai, India", "Dubai, UAE", "New York, USA"],
      RT222: ["Chennai, India", "Dubai, UAE", "New York, USA"],
      RT230: ["Dubai, UAE", "Port Louis, Singapore"],
      RT231: ["Trichy, India", "Port Louis, Singapore"],
      RT232: ["Chennai, India", "Bali, Indonesia"],
      RT233: ["Chennai, Thailand", "Bali, Bangalore"],
    };
    const routes = props.sLoc;
    const resultLocations = [];

    routes.forEach((route) => {
      let opt = [];
      // console.log(route);
      if(props.sType==="Buses" || props.sType=="Flights")
      {
        for (let obj in sroutes) {
        // console.log(obj);

        if (obj === route) {
          // console.log(sroutes[obj]);

          opt = sroutes[obj].map((arr) => <li key={arr}>{arr}</li>);
          // console.log(opt);
          }
        }
      }
      else if(props.sType==="Hotels")
      {
        opt=<li key={route}>{route}</li>
      }
      const dropdown = (
        <ul key={route}>
          {opt}
        </ul>
      );
      // console.log(dropdown);
      resultLocations.push(dropdown);
      // console.log(resultLocations);
    });
    setLocations(resultLocations);
    setNumber(resultLocations.length);
  };

  useEffect(() => {getRoute()}, []);

  return (
    <div className="cardContainer">
      <h1>{props.sName}</h1>
      <p>
        {number} * {props.sType} is available
      </p>
      <div className="card">{locations}</div>
      <br />
    </div>
  );
}

export default Card;
