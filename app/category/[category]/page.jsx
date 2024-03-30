'use client'
import { products } from '@/app/mocks/product.json';
import Link from 'next/link';
import { buyProduct } from '@/store/slice';
import { useDispatch } from 'react-redux';
import Providers from '@/store/provider';
import Header from '@/app/components/header';
import Cat from './../../styles/Category.module.css' 


const CategoryProduct = ({ params }) => {
    const categoryColors = {
        Tortillas: `${Cat.tortillaCat}`,
        Menu: `${Cat.menuCat}`,
        Picar: `${Cat.picarCat}`,
        Pollos: `${Cat.polloCat}`,
        Pescado: `${Cat.pescadoCat}`,
        Bolsa: `${Cat.bolsaCat}`
    };
    const { category } = params;

    const dispatch = useDispatch()
    const buy = (product) => {
        dispatch(buyProduct({
            title: product.title,
            price: product.price,
            quantity: product.quantity,
            category: product.category,
            id: product.id

        }))
    }

    // Filtrar el producto con el ID correspondiente
    const filteredProduct = products.filter(product => product.category === category);

    return (
        <>
            
                <div className={Cat.header}>
                    
                    <div className={Cat.div} >
                        {filteredProduct.map((productCategory) =>
                            <button onClick={() => buy(productCategory)} key={productCategory.id} className={Cat.btn}>

                            <div className={`${Cat.blockBg} ${categoryColors[productCategory.category]}`}>
             <div className={Cat.tag}>
                    {productCategory.category}
                  </div>
            </div>
              <div className={Cat.subTag}>
                 
                <h5 className={Cat.h5}>{productCategory.title}</h5>
                  
                  <p className={Cat.p}>{productCategory.price}€</p>
              </div>

                            </button>
                        )}
                    </div>

                </div>
            
        </>

    )
}

export default CategoryProduct