import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tecnologia from '../data/Tecnologia.json';


const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  
  const { productsID } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = Tecnologia.find((item) => item.id === productsID);
        setProductData(product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productsID]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="divPadre">
      <div className="Cards">
        <div key={productData.id} className="Card">
          <div className="Title">{productData.title}</div>
          <div className="Images">
            {productData.images.map((image, index) => (
              <img key={index} src={image} alt="productos-disponibles" />
            ))}
          </div>
        </div>
      </div>
      <div className="Description"><h2>Descripcion</h2>{productData.description}
      <div className="Previous">{productData.previous_price}</div>
          <div className="Price">${productData.price}</div>
          <div className="Stock">{productData.stock}</div>
          <button className="Boton-Agregar">Agregar al Carrito</button>
      </div>
    </div>
  );
      
      
};

export default ItemDetailContainer;


/* import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Tecnologia from '../data/Tecnologia.json';

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const [imageUrl, setImageUrl] = useState('');

  const { productsID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = Tecnologia.find((item) => item.id === productsID);
        setProductData(product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [productsID]);

  useEffect(() => {
    if (productData.images && productData.images.length > 0) {
      setImageUrl(productData.images[0]);
    }
  }, [productData]);

  return (
    <div className="divPadre">
      <div className="Cards">
        <div key={productData.id} className="Card">
          <div className="Title">{productData.title}</div>
          <div className="Images">
            {imageUrl && (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Imagen pequeña',
                    src: imageUrl,
                    width: 300,
                    height: 200
                  },
                  largeImage: {
                    src: imageUrl,
                    width: 1200,
                    height: 800
                  },
                  enlargedImageContainerStyle: {
                    backgroundColor: 'rgba(255,255,255,0.8)'
                  },
                  enlargedImageContainerDimensions: {
                    width: '200%',
                    height: '200%'
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="Description">
        <h2>Descripcion</h2>
        {productData.description}
        <div className="Previous">{productData.previous_price}</div>
        <div className="Price">${productData.price}</div>
        <div className="Stock">{productData.stock}</div>
        <button className="Boton-Agregar">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;

 */