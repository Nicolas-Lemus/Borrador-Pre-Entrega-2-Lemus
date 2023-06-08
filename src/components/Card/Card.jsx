import React, { useEffect, useState } from 'react'
import './Card.css';
import  Tecnologia from   "../../data/Tecnologia.json";
import { Link } from 'react-router-dom';


const Card = () => {
  const [productos, setDataProductos] = useState ([]);

  useEffect(() => {
    setDataProductos(Tecnologia);
  }, []);
  return (
    <div className="divPadre">
    <div className='Cards'>
      {productos.map((producto, index) => {
        return (
          <div key={producto.id} className='Card'>
            <div className='Title'>{producto.title}</div>
            <div className='Images'>
              <Link to={`/products/${producto.id}`}><img src={producto.images} alt="productos-disponibles"/></Link>
            </div>
            <div className='Previous'>{producto.previous_price}</div>
            <div className='Price'>${producto.price}</div>
            <div className='Stock'>{producto.stock}</div>
            <button className='Boton-Agregar'>Agregar al Carrito</button>
          </div>
        );
      })}
    </div>
    </div>
  );
    }

export default Card

/* import React, { useEffect, useState } from 'react';
import './Card.css';
import CalzadosData from "../../data/Calzados.json";

const Card = () => {
  const [productos, setDataProductos] = useState([]);

  useEffect(() => {
    
  fetch("../../data/Calzados.json")
  console.log(CalzadosData)
.then(res => res.json())

    setDataProductos(CalzadosData.Calzados);
  },[]);

  return (
    <div className="divPadre">
      <h2 className="TitleProducts">Productos Disponibles</h2>
      <div className="Cards container">
        {productos((producto, index)=>{
          return (
            <div key={producto.id} className="Card">
              <div className="Title">{producto.title}</div>
              <div className="Images">
                <img src={producto.images[0]} alt="productos-disponibles" />
              </div>
              <div className="Previous">{producto.previous_price}</div>
              <div className="Price">${producto.price}</div>
              <button className="Boton-Agregar">Agregar al Carrito</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
 */