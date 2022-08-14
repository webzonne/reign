import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import Faves from "./components/Faves";
import All from "./components/All";
//import { useState } from "react";
// import {favoritesContext, likefavoritesContext} from './Context';

function App() {
  
 

  return (
    <div className="App">
      <nav>
        <h1>HACKER NEWS</h1>
      </nav>
       <main>
            <All/>
       </main>   
    </div>
    
  );
}

export default App;
