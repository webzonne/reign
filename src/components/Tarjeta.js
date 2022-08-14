import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import './Tarjeta.css';
import { useContext } from 'react';
import {favoritesContext} from '../Context';

export default function Tarjeta({elements}) {
  const {listFaves, updateListFaves} = useContext(favoritesContext);
  //const [like, setLike] = useState(false) 32466259


  const clickLike = () =>{ 
    updateListFaves(elements.objectID)
  }
  
 const corazon = listFaves.includes(elements.objectID) ?<FcLike size='25px'/>:<FcLikePlaceholder size='25px'/>
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
                      {corazon}
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
