import React, { useEffect, useState } from 'react';
import './Card.css';
import Tecnologia from '../../data/Tecnologia.json';
import { Link } from 'react-router-dom';

const Card = () => {
  const [productos, setDataProductos] = useState([]);

  useEffect(() => {
    const productosFiltrados = Tecnologia.filter((producto) => producto.category === "Notebooks");
    setDataProductos(productosFiltrados);
  }, []);

  return (
    <div className="divPadre">
      <div className='Cards'>
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className='Card'>
              <div className='Title'>{producto.title}</div>
              <div className='Images'>
                <Link to={`/products/${producto.id}`}><img src={producto.images} alt="productos-disponibles" /></Link>
              </div>
              <div className='Previous'>{producto.previous_price}</div>
              <div className='Price'>${producto.price}</div>
              <div className='Stock'>{producto.stock}</div>
              <button className='Boton-Agregar'>Agregar al Carrito</button>
            </div>
          ))
        ) : (
          <div>No se encontraron productos</div>
        )}
      </div>
    </div>
  );
}

export default Card;
