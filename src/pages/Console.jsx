import React from 'react'
import CardConsole from '../components/Card/CardConsole';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


const Console = () => {
    return (
        <div>
            <ItemListContainer greeting="Console"/>
            <CardConsole/>
        </div>
    )
}

export default Console