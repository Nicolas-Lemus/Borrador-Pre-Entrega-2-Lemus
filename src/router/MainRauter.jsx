import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBar/NavBar'
import Products from '../pages/Products'
import ItemDetailContainer from '../pages/ItemDetailContainer'
import Notebooks from  '../pages/Notebooks'
import Smartphones from  '../pages/Smartphones'
import Console from  '../pages/Console'

const MainRauter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/products' element={<Products/>} />
                <Route exact path='/categorySmartphones' element={<Smartphones/>} />
                <Route exact path='/categoryNotebooks' element={<Notebooks/>} />
                <Route exact path='/categoryConsole' element={<Console/>} />
                <Route exact path='/products/:productsID' element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRauter