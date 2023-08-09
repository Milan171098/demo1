import React from "react";
import "./Navbar"
import Navbar from "./Navbar";
import "./home.css"
import Props from "./data/Props";
import Sdata from "./data/Propsdata";

function gcard(val) {
return (
  <Props
  imgsrc={val.imgsrc}
  title={val.title}
  link={val.link}
  />
)
}

const Home =  () => {
    return (
      <>
     <Navbar/>
     <h1>Welcom To EzyGraphic</h1>
     <h2>Free Design For Everyone</h2> <h2>Free CDR, PSD And JPG File</h2>
     <h3>Latest Resources</h3>
    

    {Sdata.map(gcard)}

      </>
    );
  };
  
  export default Home 