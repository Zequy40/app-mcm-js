'use client'
import { buyProduct } from '@/store/slice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductMob from './../styles/Product.module.css'



const categoryColors = {
  Tortillas: `${ProductMob.tortillaCat}`,
  Menu: `${ProductMob.menuCat}`,
  Picar: `${ProductMob.picarCat}`,
  Pollos: `${ProductMob.polloCat}`,
  Pescado: `${ProductMob.pescadoCat}`,
  Bolsa: `${ProductMob.bolsaCat}`
};

export default function ProductList({ products }) {

  const [buttonPressTime, setButtonPressTime] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const dispatch = useDispatch()
  const buy = (product) => {
    dispatch(buyProduct({
      title: product.title,
      price: product.price,
      quantity: 1,
      category: product.category,
      id: product.id

    }))

  }

  const handleButtonPress = (productId) => {
    // Obtener el tiempo actual en milisegundos
    const currentTime = new Date().getTime();
    // Guardar el tiempo en el estado
    setButtonPressTime(currentTime);
    setSelectedProductId(productId);
  };

  // Función para manejar el evento de soltar el botón
  const handleButtonRelease = () => {
    // Obtener el tiempo actual en milisegundos
    const currentTime = new Date().getTime();
    // Calcular la diferencia de tiempo en segundos
    const timeDifference = (currentTime - buttonPressTime);

    // Si el tiempo de pulsación es mayor o igual a 2 segundos, redirigir a otra página
    if (timeDifference >= 300) {
      // Reemplaza 'ruta' con la ruta de la página a la que quieres redirigir
      window.location.href = `/products/${selectedProductId}`;
      console.log('estoy pulsado');
    }
  };

  return (
    <div className={ProductMob.header}>
      <div className={ProductMob.contain} >
        {
          products.map((product) => (
            <button 
            onClick={() => buy(product)} key={product.id} 
            className={ProductMob.blockBtn}
            >
            <div className={`${ProductMob.card} ${categoryColors[product.category]}`}>
             <div className={ProductMob.subCard}>
                    {product.category}
                  </div>
            </div>
              <div className={ProductMob.band}
              onTouchStart={() => handleButtonPress(product.id)} 
            onTouchEnd={handleButtonRelease}
            onMouseDown={() => handleButtonPress(product.id)}
            onMouseUp={handleButtonRelease}>
                 
                <h5 className={ProductMob.h5}>{product.title}</h5>
                  
                  <p className={ProductMob.p}>{product.price}€</p>
              </div>
            </button>
          ))
        }
      </div>


    </div>
  )
}
