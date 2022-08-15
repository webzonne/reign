import React from 'react';
import { FcLike} from 'react-icons/fc';
import "./All.css";
import './Tarjeta.css';

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
                        <FcLike size='25px'/>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
