import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import './Tarjeta.css';
import { useContext } from 'react';
import {favoritesContext} from '../Context';

export default function Tarjeta({elements}) {
  const {updatelike} = useContext(favoritesContext);
  const [like, setLike] = useState(false)


  const clickLike = () =>{ 
    console.log(elements)
    if(like){
      setLike(false)
    }else{
      setLike(true)
    }
  }


  return (
    <div className='container'>
        <div className='tarjeta'>
            <div className='card'>
            <a  rel="noopener noreferrer" target="_blank" href={elements.story_url}>
                <div className='text'>
                    <p>{elements.created_at}</p>
                    <p>{elements.story_title}</p>
                </div>
            </a>
                <div onClick={clickLike} className='image'>
                    <div className='fixed'>
                      {like ? <FcLike size='25px'/>:<FcLikePlaceholder size='25px'/>}
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
