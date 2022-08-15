import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Faves from "./components/Faves";
import All from "./components/All";
import {favoritesContext} from "./Context";
import {useState } from "react";
function App() {
  const [faves, setfaves] = useState([])
  const [lista, setlist] = useState([])
  const [activeAll, setactiveAll] = useState(true)

  const updateListFaves = (element)=>{
    console.log(element)
    const favoritos = [...faves]
    const listkey = [...lista]
    const indice = listkey.indexOf(element.objectID)
    if(indice >=0){
      listkey.splice(indice, 1)
      const filtro = favoritos.filter((e)=>e.objectID !== element.objectID)
      setfaves(filtro)
    }else{
      listkey.push(element.objectID);
      favoritos.push(element)
      setfaves(favoritos)
    }
    setlist(listkey)
    console.log(faves)
  }

  const clicAll = ()=>{
    setactiveAll(true)
  }
  const clicFaves = ()=>{
    setactiveAll(false)
  }

  return (
    <favoritesContext.Provider value={{
      listFaves:faves,
      updateListFaves:updateListFaves
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
          { activeAll ?<p className="AllActive">All</p>:<p className="AllInactive">All</p>}
            </div>
          </Link>
          <Link to="/faves">
            <div onClick={clicFaves}>
            { activeAll ?<p className="AllInactive">My faves</p>:<p className="AllActive">My faves</p>}
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
    </favoritesContext.Provider>
  );
}

export default App;
