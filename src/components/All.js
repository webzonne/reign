import React from "react";
import { useEffect, useState } from "react";
import { getDataAngular, getDataReact, getDataVue } from "../Api";
import Tarjeta from "../components/Tarjeta";
import "./All.css";
import InfiniteScroll from "react-infinite-scroll-component";


export default function All(like) {
  const [framework, setframework] = useState("");
  const [data, setdata] = useState("");
  const [count, setcount] = useState(0);


  useEffect(() => {
    
    const getData = async () => {
      switch (framework) {
        case "angular":
          console.log(count)
          const datoAngular = await getDataAngular(count); //datos Api
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
          const datoDefault = await getDataAngular(count);
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
    
  }, [framework,count]);

  const pageNext = ()=>{
    setcount(count+1)
}

  return (
    
    <div>
      <InfiniteScroll
  dataLength={data.length} //This is important field to render the next data
  next={pageNext}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
  

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
      <div className="cargando">
        <p>cargando</p>
      </div>
      
    
    </InfiniteScroll>
    </div>
   
  );
}
