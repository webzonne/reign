import React from "react";
import { useState } from "react";
import {dataApi} from "../Api"
import Tarjeta from "../components/Tarjeta";
import iconAngular from "../images/icon-angular.png";
import iconReact from "../images/icon-react.png";
import iconVue from "../images/icon-vue.png";
import SelectAngular from "./SelectAngular";
import SelectReact from "./SelectReact";
import SelectVue from "./SelectVue";
import flecha from "../images/flecha.jpg"
import "./All.css";
import "../styles/selector.css"
//import InfiniteScroll from "react-infinite-scrsoll-component";


export default function All() {
  //const {listFaves,setlistFaves,updatelistfaves} = useContext(datoGlobalContext)
  const [framework, setframework] = useState(JSON.parse(localStorage.getItem('framework')) ||"");
  const [data, setdata] = useState(JSON.parse(localStorage.getItem('apidata'))||[]);
  const [actSelect, setactSelect] = useState(false);

 

  // Selectactive
  const activarSelect = () => {
    setactSelect(!actSelect);
  };
  const onblur = () => {
    setactSelect(!actSelect);
  };

  // Orden
  const orden = (a,b) =>{
    if(a.created_at > b.created_at){
      return -1
    }
    if(a.created_at < b.created_at){
      return 1
    }
  }

  // ONCLICK
  //ANGULAR
  const clickAngular = async() => {
    const frame = "angular"
    const datos = await dataApi(frame)
    const datoFiltradoAngular = datos.filter((e)=> e.story_url && e.story_title && e.created_at != null).sort(orden)
    setdata(datoFiltradoAngular)
    localStorage.setItem('apidata', JSON.stringify(datoFiltradoAngular))
    console.log(datos)
    setframework(frame);
    localStorage.setItem('framework', JSON.stringify(frame))
  };
  //REACT
  const clickReact = async() => {
    const frame = "react";
    const datos = await dataApi(frame)
    const datoFiltradoReact = datos.filter((e)=>e.story_url && e.story_title && e.created_at != null).sort(orden)
    setdata(datoFiltradoReact)
    localStorage.setItem('apidata', JSON.stringify(datoFiltradoReact))
    setframework(frame);
    localStorage.setItem('framework', JSON.stringify(frame))
  };
  //VUE
  const clickVue = async() => {
    const frame = "vue";
    const datos = await dataApi(frame)
    const datoFiltradoVue = datos.filter((e)=>e.story_url && e.story_title && e.created_at != null).sort(orden)
    setdata(datoFiltradoVue)
    localStorage.setItem('apidata', JSON.stringify(datoFiltradoVue))
    setframework(frame);
    localStorage.setItem('framework', JSON.stringify(frame))
  };
  let estadoSelect = "select your news";
  // SELECT FRAMEWORK
  switch (framework) {
    case "angular":
      estadoSelect = <SelectAngular />;
      break;
    case "react":
      estadoSelect = <SelectReact />;
      break;
    case "vue":
      estadoSelect = <SelectVue />;
      break;
    default:
      estadoSelect = "select your news";
      break;
  }

  return (
    
    <div>
  
    {/* select comienza */}
    <div className="selector">
      <div
        onClick={activarSelect}
        tabIndex="0"
        onBlur={() => setTimeout(() => setactSelect(!actSelect), 250)}
        className="select"
      >
        {estadoSelect}
        <img src={flecha} alt="flecha" />
      </div>
      {actSelect && (
        <div tabIndex="0" onBlur={onblur} className="box">
          {/* angular */}
          <div onClick={clickAngular} className="box-framework">
            <img src={iconAngular} alt="iconAngular" /> <span>Angular</span>
          </div>
          {/* react */}
          <div onClick={clickReact} className="box-framework">
            <img src={iconReact} alt="iconReact" />
            <span>React</span>
          </div>
          {/* vue */}
          <div onClick={clickVue} className="box-framework">
            <img src={iconVue} alt="iconVue" />
            <span>Vue</span>
          </div>
        </div>
      )}
    </div>
    {/* <div><p>{listFaves.lenght ? listFaves.lenght:0}</p></div> */}
    {/* select termina */}
    <div className="AllComponent">

    </div>
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
   
  );
}
