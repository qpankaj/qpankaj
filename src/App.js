import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About"
import Home from "./Home";
import Contact from "./Contact";
import Datatfatch from "./datatfatch";



function App() {

    return (
        <div>
         
         <>
         <h2>Hello</h2>
        
        
              
         <Routes>
             
            <Route path="home" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="" element={<Datatfatch />}></Route>

         </Routes>

         
         </>




        </div>
    )
    
}

export default App