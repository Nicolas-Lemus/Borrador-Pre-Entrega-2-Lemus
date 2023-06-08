import React from 'react'
import CardSmartphones from '../components/Card/CardSmartphones';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


const Smartphones = () => {
    return (
        <div>
            <ItemListContainer greeting="Smartphones"/>
            <CardSmartphones/>
        </div>
    )
}

export default Smartphones