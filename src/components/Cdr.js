import React from "react";
import "./Navbar"
import Navbar from "./Navbar";
import "./home.css"
import Props from "./data/Props";
import Cdrdata from "./data/Cdrdata"


function gcard(val) {
return (
  <Props
  imgsrc={val.imgsrc}
  title={val.title}
  link={val.link}
  />
)
}


const Cdr =  () => {
    return (
      <>
     <Navbar/>
     <h1>CDR File</h1>
     {Cdrdata.map(gcard)}

      </>
    );
  };
  
  export default Cdr