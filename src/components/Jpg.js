import React from "react";
import "./Navbar"
import Navbar from "./Navbar";
import "./home.css"
import Props from "./data/Props";
import Jpgdata from "./data/Jpgdata";

function gcard(val) {
return (
  <Props
  imgsrc={val.imgsrc}
  title={val.title}
  link={val.link}
  />
)
}


const Jpg =  () => {
    return (
      <>
     <Navbar/>
     <h1>JPG File</h1>
     {Jpgdata.map(gcard)}

      </>
    );
  };
  
  export default Jpg