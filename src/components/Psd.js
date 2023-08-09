import React from "react";
import "./Navbar"
import Navbar from "./Navbar";
import "./home.css"
import Props from "./data/Props";
import Psddata from "./data/Psddata";

function gcard(val) {
return (
  <Props
  imgsrc={val.imgsrc}
  title={val.title}
  link={val.link}
  />
)
}


const Psd =  () => {
  return (
    <>
   <Navbar/>
   <h1>PSD File</h1>
   {Psddata.map(gcard)}

    </>
  );
};
  
  export default Psd