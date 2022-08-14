import React from 'react'
import {favoritesContext} from '../Context';
import { useContext } from 'react';
import TarjetaFave from './TarjetaFave';


export default function Faves() {
  const {listFaves} = useContext(favoritesContext)
  return (
    <div className='Allcontainer'>
        {listFaves.map((e)=>{
          return(
           <TarjetaFave key={e.objectID}
           elements={e}
           />
          )
        })}
    </div>
  )
}
