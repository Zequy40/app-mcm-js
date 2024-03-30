import { products } from '@/app/mocks/product.json';
import Link from 'next/link';
import ProductMob from './../../styles/ProductOnly.module.css'


const Page = ({ params }) => {
  const categoryColors = {
    Tortillas: `${ProductMob.tortillaCat}`,
  Menu: `${ProductMob.menuCat}`,
  Picar: `${ProductMob.picarCat}`,
  Pollos: `${ProductMob.polloCat}`,
  Pescado: `${ProductMob.pescadoCat}`,
  Bolsa: `${ProductMob.bolsaCat}`
  };
  const { id } = params;
  const idAsNumber = parseInt(id, 10);

  // Filtrar el producto con el ID correspondiente
  const filteredProduct = products.filter(product => product.id === idAsNumber);

  // Si el producto no se encuentra, puedes mostrar un mensaje o hacer lo que consideres adecuado.
  if (filteredProduct.length === 0) {
    return <div>El producto con ID {id} no fue encontrado.</div>;
  }

  const product = filteredProduct[0];

  return (
    <>
      <div className={ProductMob.header}>
        <div className={ProductMob.contain} >
        <Link href={'/'} className={ProductMob.btn}>X</Link>
          <div className={`${ProductMob.cat} ${categoryColors[product.category]}`}>{product.category}</div>
          <div className={ProductMob.card}>
            <div className={ProductMob.title}>{product.title}:</div>
            <div className={ProductMob.band}>
              <div className={ProductMob.price}>{product.price}€</div>
              

            </div>
            
          </div>
          <div className={ProductMob.p}>
          <div className={ProductMob.description}>Descripción:</div>
          <div className={ProductMob.subDescription}>{product.description}</div>
          </div>
        
        </div>

      </div>



    </>

  )
}

export default Page
