import React from "react";
import { useState } from "react";
import {dataApi,dataMoreApi} from "../Api"
import Tarjeta from "../components/Tarjeta";
import iconAngular from "../images/icon-angular.png";
import iconReact from "../images/icon-react.png";
import iconVue from "../images/icon-vue.png";
import SelectAngular from "./SelectAngular";
import SelectReact from "./SelectReact";
import SelectVue from "./SelectVue";
import flecha from "../images/flecha.jpg"
import "../styles/All.css";
import "../styles/selector.css"
import InfiniteScroll from 'react-infinite-scroll-component';


export default function All() {
  const [framework, setframework] = useState(JSON.parse(localStorage.getItem('framework')) ||"");
  const [data, setdata] = useState(JSON.parse(localStorage.getItem('apidata'))||[]);
  const [actSelect, setactSelect] = useState(false);
  const [page, setpage] = useState(2)
  const [hasMore, sethasmore] = useState(true)
  const [cargando,setcargando] = useState(JSON.parse(localStorage.getItem('cargando'))|| true)


  // Selectactive
  const activarSelect = () => {
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
    setcargando(false)
    const datos = await dataApi(frame)
    const datoFiltradoAngular = datos.filter((e)=> e.story_url && e.story_title && e.created_at !== null).sort(orden)
    setdata(datoFiltradoAngular)
    localStorage.setItem('apidata', JSON.stringify(datoFiltradoAngular))
    setcargando(true)
    localStorage.setItem('cargando',JSON.stringify(cargando))
    console.log(datos)
    setframework(frame);
    localStorage.setItem('framework', JSON.stringify(frame))
  };
  //REACT
  const clickReact = async() => {
    const frame = "react";
    setcargando(false)
    const datos = await dataApi(frame)
    const datoFiltradoReact = datos.filter((e)=>e.story_url && e.story_title && e.created_at !== null).sort(orden)
    setdata(datoFiltradoReact)
    localStorage.setItem('apidata', JSON.stringify(datoFiltradoReact))
    setcargando(true)
    localStorage.setItem('cargando',JSON.stringify(cargando))
    localStorage.setItem('cargando',JSON.stringify(cargando))
    setframework(frame);
    localStorage.setItem('framework', JSON.stringify(frame))
  };
  //VUE
  const clickVue = async() => {
    const frame = "vue";
    setcargando(false)
    const datos = await dataApi(frame)
    const datoFiltradoVue = datos.filter((e)=>e.story_url && e.story_title && e.created_at !== null).sort(orden)
    setdata(datoFiltradoVue)
    localStorage.setItem('apidata', JSON.stringify(datoFiltradoVue))
    setcargando(true)
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

   //BOX 
 let box = ''
 if(data.length !== 0){
   box=true
 }else{
   box=false
 }

  
    const getdataMore = async()=>{
      const datosMore = await dataMoreApi(framework,page)
      const datoFiltradoAll = datosMore.filter((e)=>e.story_url && e.story_title && e.created_at !== null).sort(orden)
      setdata([...data,...datoFiltradoAll])
      if(data.length===0 || datoFiltradoAll.length===0){
        sethasmore(false)
      }
      setpage(page+1)
    }


  return (
    
    <div>
      
       <InfiniteScroll
    dataLength={data.length} //This is important field to render the next data
    next={getdataMore}
    hasMore={hasMore}
    loader={<h4>""</h4>}
    endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
  >
  
    {/* select comienza */}
    <div className={box ? "selector":"selectorVacio"}>
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
        <div className="box">
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
    <div className="AllComponent">

    </div>
   {cargando ?  <div className="Allcontainer">
        {data && data.map((elements)=>{
              return(
                  <Tarjeta 
                  key={elements.objectID} 
                  elements={elements}
                />
              )
            })}
      </div>:<h3 className="cargando">Loading...</h3>}
      </InfiniteScroll>
  
    </div>
   
  );
}
