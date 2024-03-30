import Header from './components/header'
import Product from './components/product'
import Carts from './components/carts';
import {products} from '@/app/mocks/product.json';
import Search from './components/search';
import './globals.css'



export default function Home() {
  return (
    <>
      <Header products={products}/>
      <div className='product'>
      <Search products={products}/>
     <Carts/>
      <Product products={products}/>
      </div>

     
     
    </>
  )
}