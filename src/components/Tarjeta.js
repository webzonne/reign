import React from 'react';
//import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import './Tarjeta.css';
import { useContext } from 'react';
import {favoritesContext} from '../Context';
import heart from '../images/corazon.png';
import vacio from '../images/vacio.png';
import reloj from '../images/reloj.png';
import moment from 'moment';

export default function Tarjeta({elements}) {
  const {listFaves, updateListFaves} = useContext(favoritesContext);
  const formatoTime = moment(elements.created_at).fromNow();


  const clickLike = () =>{ 
    updateListFaves(elements)
  }

    const listID = listFaves.map(e=>e.objectID)
    const corazon = listID.includes(elements.objectID)
    //?<FcLike size='25px'/>:<FcLikePlaceholder size='25px'/>
    
    
 
  return (
    <div>
        <div className='tarjeta'>
            <div className='card'>
            <a  rel="noopener noreferrer" target="_blank" href={elements.story_url}>
                <div className='text'>
                  <div>
                    <img src={reloj} alt="icon-reloj"/><p className='fecha'>{formatoTime} by {elements.author}</p>
                  </div>
                    <p className='title'>{elements.story_title}</p>
                </div>
            </a>
                <div onClick={clickLike} className='image'>
                    <div className='fixed'>
                      {corazon ? <img src={heart} alt="icon-heart"/>:<img src={vacio} alt="icon-heart"/>}
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
