import React from 'react'
import Card from '../components/Card/Card';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


const Products = () => {
    return (
        <div>
            <ItemListContainer greeting="Productos Disponibles"/>
            <Card/>
        </div>
    )
}

export default Products