import React from 'react';
import '../styles/Tarjeta.css';
import { useContext } from 'react';
import DatoGlobalContext from '../Context';
import heart from '../images/corazon.png';
import vacio from '../images/vacio.png';
import reloj from '../images/reloj.png';
import moment from 'moment';

export default function Tarjeta({elements}) {
  const {listFaves,updatelistFaves} = useContext(DatoGlobalContext)
  const corazon = listFaves.find((e)=> e.objectID === elements.objectID) ? heart:vacio

    
   const onclickTarjeta = (elements)=>{
    updatelistFaves(elements)
   }
 
  return (
    <div>
        <div onClick={()=>onclickTarjeta(elements)} className='tarjeta'>
            <div className='card'>
            <a  rel="noopener noreferrer" target="_blank" href={elements.story_url}>
                <div className='text'>
                  <div>
                    <img src={reloj} alt="icon-reloj"/><p className='fecha'>{moment(elements.created_at).fromNow()} by {elements.author}</p>
                  </div>
                    <p className='title'>{elements.story_title}</p>
                </div>
            </a>
                <div className='image'>
                    <div className='fixed'>
                      {<img src={corazon} alt="icon-heart"/>}
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
