import React from "react";
import { useEffect, useState } from "react";
import { getDataAngular, getDataReact, getDataVue } from "../Api";
import Tarjeta from "../components/Tarjeta";
import "./All.css";

export default function All() {
  const [framework, setframework] = useState("");
  const [data, setdata] = useState("");
  const [selector, setselector] = useState(true);
  const [like, setlike] =useState(false)

  useEffect(() => {
    
    const getData = async () => {
      switch (framework) {
        case "angular":
          const datoAngular = await getDataAngular(); //datos Api
          const datoFiltradoAngular = datoAngular.hits.filter(
            (e) => e.story_url && e.story_title && e.created_at != null
          ); // filtro datos api
          localStorage.setItem('saveData', JSON.stringify(datoFiltradoAngular)) // localStorage
          break;
        case "react":
          const datoReact = await getDataReact();
          const datoFiltradoReact = datoReact.hits.filter(
            (e) => e.story_url && e.story_title && e.created_at != null
          );
          localStorage.setItem('saveData', JSON.stringify(datoFiltradoReact))
          break;
        case "vue":
          const datoVue = await getDataVue();
          const datoFiltradoVue = datoVue.hits.filter(
            (e) => e.story_url && e.story_title && e.created_at != null
          );
          localStorage.setItem('saveData', JSON.stringify(datoFiltradoVue))
          break;
        default:
          const datoDefault = await getDataAngular();
          const datoFiltadroDefault = datoDefault.hits.filter(
            (e) => e.story_url && e.story_title && e.created_at != null
          );
          localStorage.setItem('saveData', JSON.stringify(datoFiltadroDefault))
          break;
      }
    };
    getData();
    const localData = JSON.parse(localStorage.getItem('saveData'));
    if(localData){
      setdata(localData)
    }
  }, [framework, like]);

  const selectorALL = ()=>{
      setselector(true)
  }

  const selectorFaves = ()=>{
    setselector(false)
}

  return (
    <div>
      <div className="selectores">
        <div onClick={selectorALL}>
          ALL
        </div>
        <div onClick={selectorFaves}>
          My Faves
        </div>
      </div>
    <div className="AllComponent">
        {selector ?<select defaultValue={framework} onChange={(e)=>setframework(e.target.value)}>
              <option hidden>Select your news</option>
              <option value="angular">Angular</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
        </select>:""}
      <div className="Allcontainer">
      {selector ? data && data.map((elements)=>{
              return(
                  <Tarjeta 
                  key={elements.objectID} 
                  elements={elements}
                />
              )
            }):<p>nothing</p>}
      </div>
    </div>
    </div>
  );
}
