import React from "react";
import { useEffect, useState } from "react";
import { getDataAngular, getDataReact, getDataVue } from "../Api";
import Tarjeta from "../components/Tarjeta";
import "./All.css";
//import InfiniteScroll from "react-infinite-scroll-component";


export default function All(like) {
  const [framework, setframework] = useState("");
  const [data, setdata] = useState("");

  const orden = (a,b) =>{
    if(a.created_at > b.created_at){
      return -1
    }
    if(a.created_at < b.created_at){
      return 1
    }
  }
  useEffect(() => {
    
    const getData = async () => {
      switch (framework) {
        case "angular":
          const datoAngular = await getDataAngular(); //datos Api
          const datoFiltradoAngular = datoAngular.hits.filter(
            (e) => e.story_url && e.story_title && e.created_at != null
          ).sort(orden); // filtro datos api
          setdata(datoFiltradoAngular)
          //localStorage.setItem('saveData', JSON.stringify(datoFiltradoAngular)) // localStorage
          break;
        case "react":
          const datoReact = await getDataReact();
          const datoFiltradoReact = datoReact.hits.filter(
            (e) => e.story_url && e.story_title && e.created_at != null
          ).sort(orden);
          setdata(datoFiltradoReact)
          //localStorage.setItem('saveData', JSON.stringify(datoFiltradoReact))
          break;
        case "vue":
          const datoVue = await getDataVue();
          const datoFiltradoVue = datoVue.hits.filter(
            (e) => e.story_url && e.story_title && e.created_at != null
          ).sort(orden);
          setdata(datoFiltradoVue)
          //localStorage.setItem('saveData', JSON.stringify(datoFiltradoVue))
          break;
        default:
          const datoDefault = await getDataAngular();
           const datoFiltadroDefault = datoDefault.hits.filter(
            (e) => e.story_url && e.story_title && e.created_at != null
          ).sort(orden);
          //localStorage.setItem('saveData', JSON.stringify(datoFiltadroDefault))
          setdata(datoFiltadroDefault)
          break;
      }
      //setdata(localStorage.getItem('saveData'))
    };
    getData()
    // localStorage.setItem('saveData', JSON.stringify(data))
    // const localData = JSON.parse(localStorage.getItem('saveData'));
    // console.log(localData)
    //   if(localData){
    //     setdata(localData)
    //   }else{
    //     getData()
    //   }
    
    
  }, [framework]);


  return (
    
    <div>
  

    <div className="AllComponent">
    
    
        <select className="select"  defaultValue={framework} onChange={(e)=>setframework(e.target.value)}>
              <option hidden>Select your news</option>
              <option className="option" value="angular">Angular</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
        </select>
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
