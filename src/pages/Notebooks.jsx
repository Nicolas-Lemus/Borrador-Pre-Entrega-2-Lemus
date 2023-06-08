import React from 'react'
import CardNotebooks from '../components/Card/CardNotebooks';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


const Notebooks = () => {
  return (
    <div>
        <ItemListContainer greeting="Notebooks"/>
        <CardNotebooks/>
    </div>
  )
}

export default Notebooks