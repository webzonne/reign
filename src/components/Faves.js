import React from 'react'
import DatoGlobalContext from '../Context';
import { useContext } from 'react';
import Tarjeta from './Tarjeta';


export default function Faves() {
  const {listFaves} = useContext(DatoGlobalContext)
  return (
    <div className='Allcontainer'>
        {listFaves.map((e)=>{
          return(
           <Tarjeta key={e.objectID}
           elements={e}
           />
          )
        })}
    </div>
  )
}
