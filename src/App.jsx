import "./App.css";
import Widget from './components/Widget';
import Card from './components/Card';
import axios from "axios";
import { useState } from "react";

function App() {

  let[results,setResult]=useState([]);
  let[category,setCategory]=useState([]);
  
  const handleSubmit=(selectedCategory,searchQuery)=>
    {
      // console.log(selectedCategory);
      // console.log(searchQuery);
      makeAjaxCall(selectedCategory,searchQuery)
    }
    
    const makeAjaxCall=(selectedCategory,searchQuery)=>
      {
        // console.log(selectedCategory);
        let categoryStates=[];
        let updatedResults=[];
        let allCategoriesList=['Buses','Flights','Hotels'];
    axios
    .get('bookmytrip-service.json')
    .then((response)=>
    {
      let bmtServices=response.data[selectedCategory];

     if (selectedCategory !== "All") {
       bmtServices.forEach((elem) => {
        //  console.log(elem.serviceName);
        //  console.log(elem.locations);

        if(elem.serviceName.toLowerCase().search(searchQuery.toLowerCase())!==-1)
        {
          updatedResults.push(elem);
          categoryStates.push(elem);
          // console.log(updatedResults);
          // console.log(categoryStates);
        }


       });
       setResult(updatedResults);
       setCategory(categoryStates);
     } 
     else {
       allCategoriesList.forEach((elem) => {
        // console.log(elem);
        
         console.log(elem);
        //  console.log(elem.locations);

        // if(elem.serviceName.toLowerCase().search(searchQuery.toLowerCase())!==-1)
        // {
        //   updatedResults.push(elem);
        //   categoryStates.push(elem);
        //   // console.log(updatedResults);
        //   // console.log(categoryStates);
        // }

       });
      //  setResult(updatedResults);
      //  setCategory(categoryStates);
     }
      
    })
    .catch((error)=>
    {
      console.log(error);
      
    })
  }



  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <Widget onSubmit={handleSubmit}/>
        </div>
      </header>
      <main>
        <div className="wrapper">
          
          {
            results.map((res,ind)=>(
              // console.log(res.serviceID)
              // console.log(res.serviceName)
              // console.log(res.locations)

              <Card key={res.serviceID} sId={res.serviceID} sName={res.serviceName} sLoc={res.locations}/>


            ))
          }

        </div>
      </main>
    </div>
  );
}

export default App;
