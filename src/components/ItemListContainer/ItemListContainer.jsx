import React from 'react'
import './ItemListContainer.css';


const itemListContainer = ({greeting}) => {
    return (
        <div className='tittle'>
            {greeting}
        </div>
    )
}

export default itemListContainer