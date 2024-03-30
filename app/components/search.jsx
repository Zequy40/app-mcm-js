'use client'
import React, { useState } from 'react';
import { buyProduct } from '@/store/slice';
import {useDispatch} from 'react-redux';
import Link from 'next/link';
import SearchMob from './../styles/Search.module.css'


function Search({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    // Filtrar productos según el término de búsqueda
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(searchTerm ? filteredProducts : []);
  };

  const displayedProducts = searchTerm ? filteredProducts : products;

  const dispatch = useDispatch()
const buy = (product) => {
 dispatch(buyProduct({
  title:product.title,
  price:product.price,
  quantity:product.quantity,
  category:product.category,
  id:product.id

 }))
 
} 
  
  return (
    <>
      <div className={SearchMob.header}>
      
       <Link href={'/factura'}><div className={SearchMob.btn}>Ticket</div></Link>
        <div className={SearchMob.contain}>
          <div className={SearchMob.subContain}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={SearchMob.svg} viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              placeholder='Buscar'
              className='bg-gray-200'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={SearchMob.svg} viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
      {/* Mostrar resultados filtrados */}
      {filteredProducts.length > 0 && (
        <div>
          <h2>Resultados:</h2>
          <ul>
          {displayedProducts.map((product) => (
              <li key={product.id}>
              <button onClick={() => buy(product)} key={product.id} className="max-w-[760px] w-full border border-black my-1 p-1 bg-slate-400 rounded-lg  cursor-pointer active:scale-90">
            <div>
              <div className="flex justify-between items-center text-white">
                <h5 className="text-xs">{product.title}</h5>
                <p className="text-sm text-center">{product.description}</p>
                <p className="card-text">{product.price}€</p>
              </div>
            </div>
</button>
                
                </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Search;
