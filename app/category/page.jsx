import { products } from '@/app/mocks/product.json';
import Link from 'next/link';
import Cat from './../styles/CategoryId.module.css' 

export default function Category() {
    // Crear un conjunto de categorías únicas utilizando el método Set
    const uniqueCategories = new Set(products.map(product => product.category));

    // Convertir el conjunto de categorías únicas en un array
    const categoriesArray = [...uniqueCategories];


    return (
        <>
            <div className={Cat.header}>
                <div className={Cat.div} >
                    {categoriesArray.map(category => (
                        <div className={Cat.contain} key={category} >
                            <Link href={`/category/${category}`} className={Cat.a} >{category}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

