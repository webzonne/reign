import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Faves from "./components/Faves";
import All from "./components/All";
import {useState } from "react";
import {DatoGlobalContextProvider } from './Context';
function App() {
  const [listFaves, setlistFaves] = useState(JSON.parse(localStorage.getItem('favoritos'))||[])
  const [activeAll, setactiveAll] = useState(JSON.parse(localStorage.getItem('buttonActive'))||false)
 
  let activador = false
  const clicAll = ()=>{
    activador = false
    setactiveAll(activador)
    localStorage.setItem('buttonActive',JSON.stringify(activador))
  }
  const clicFaves = ()=>{
    activador = true
    setactiveAll(activador)
    localStorage.setItem('buttonActive',JSON.stringify(activador))
  }

  const updatelistFaves = (elements)=>{
         const buscar = listFaves.find((e)=> e.objectID === elements.objectID)
      if(buscar){
        const updateData = listFaves.filter((e)=> e.objectID !== elements.objectID)
        setlistFaves(updateData)
      }else{
        const updateData = [...listFaves, elements]
        localStorage.setItem('favoritos', JSON.stringify(updateData))
        setlistFaves(updateData)
      }
  }

  return (
    <DatoGlobalContextProvider value ={{
      listFaves:listFaves,
      updatelistFaves:updatelistFaves
    }}>
    <div>
      <header>
        <div className="HeaderHackerNew">
          <h1 className="title">HACKER NEWS</h1>
        </div>
      <nav>
        
        <div className="AllAndFaves">
          <Link to="/">
            <div onClick={clicAll}>
          { activeAll ?<p className="AllInactive">All</p>:<p className="AllActive">All</p>}
            </div>
          </Link>
          <Link to="/faves">
            <div onClick={clicFaves}>
            { activeAll ?<p className="AllActive">My faves</p>:<p className="AllInactive">My faves</p>}
            </div>
          </Link>
        </div>
      </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<All
           
          />} />
          <Route path="/Faves" element={<Faves />} />
        </Routes>
      </main>
    </div>
    </DatoGlobalContextProvider>
  );
}

export default App;
