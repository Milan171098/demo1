import React from "react";
import Home from "./components/Home"
import Cdr from "./components/Cdr"
import Psd from "./components/Psd"
import Jpg from "./components/Jpg"
import Footer from "./components/Footer";
import { BrowserRouter , Routes, Route } from "react-router-dom"



const App = () => {
  return (
    <BrowserRouter>
 <Routes>
 <Route path="/" element= { <Home/> } />
 <Route path="/cdr" element= { <Cdr/> } />
  <Route path="/psd" element= { <Psd/> } />
  <Route path="/jpg" element= { <Jpg/> } />
 </Routes>
 
 <Footer/>
 <footer>
  
 </footer>
</BrowserRouter>



);
};

export default App;
