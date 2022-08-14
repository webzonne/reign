import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Faves from "./components/Faves";
import All from "./components/All";
import {favoritesContext} from "./Context";
import {useState } from "react";
function App() {
  const [faves, setfaves] = useState([])

  const updateListFaves = (id)=>{
    const idAll = [...faves];
    const valorRepetido = idAll.indexOf(id)
    if(valorRepetido >=0){
      idAll.splice(valorRepetido, 1);
    }else{
      idAll.push(id)
    }
    setfaves(idAll)
    console.log(faves)
  }

  return (
    <favoritesContext.Provider value={{
      listFaves:faves,
      updateListFaves:updateListFaves
    }}>
    <div>
      <div className="App"></div>
      <nav>
        <h1>HACKER NEWS</h1>
        <div className="AllAndFaves">
          <Link to="/">
            <div className="All">
              <p>ALL</p>
            </div>
          </Link>
          <Link to="/faves">
            <div className="Faves">
              <p>My faves</p>
            </div>
          </Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<All
           
          />} />
          <Route path="/Faves" element={<Faves />} />
        </Routes>
      </main>
    </div>
    </favoritesContext.Provider>
  );
}

export default App;
