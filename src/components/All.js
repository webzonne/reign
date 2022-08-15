import React from "react";
import { useEffect, useState } from "react";
import { getDataAngular, getDataReact, getDataVue } from "../Api";
import Tarjeta from "../components/Tarjeta";
import "./All.css";


export default function All(like) {
  const [framework, setframework] = useState("");
  const [data, setdata] = useState("");


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
    //const localDataLike = localData.map(e=>({...e, like:false}))
    if(localData){
      setdata(localData)
    }
  }, [framework,like]);



  return (
    <div>
    <div className="AllComponent">
    
    
        <select className="select"  defaultValue={framework} onChange={(e)=>setframework(e.target.value)}>
              <option hidden>Select your news</option>
              <option className="option" value="angular">Angular</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
        </select>
      <div className="Allcontainer">
       { data && data.map((elements)=>{
              return(
                  <Tarjeta 
                  key={elements.objectID} 
                  elements={elements}
                />
              )
            })}
      </div>
    </div>
    </div>
  );
}
