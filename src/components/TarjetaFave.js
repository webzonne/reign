import React from 'react';
import "./All.css";
import './styles/Tarjeta.css';
import heart from '../images/corazon.png';

export default function TarjetaFave({elements}) {

  return (
    <div className='AllComponent'>
        <div className='tarjeta'>
            <div className='card'>
            <a  rel="noopener noreferrer" target="_blank" href={elements.story_url}>
                <div className='text'>
                    <p className='fecha'>{elements.created_at}</p>
                    <p className='title'>{elements.story_title}</p>
                </div>
            </a>
                <div className='image'>
                    <div className='fixed'>
                        <img src={heart} alt="icon-heart"/>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
