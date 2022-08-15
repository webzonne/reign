import React from 'react';
import { FcLike} from 'react-icons/fc';
import './TarjetaFave.css';


export default function TarjetaFave({elements}) {

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
