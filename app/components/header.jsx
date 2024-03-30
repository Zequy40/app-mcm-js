'use client'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '@/store/slice';
import { usePathname } from 'next/navigation';
import HeaderMob from './../styles/Header.module.css'


function Header() {
 
  const router = usePathname();

  const isOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    dispatch(toggleCart());
  }
  return (
    <>
      <div className={HeaderMob.header}>
        <div className={HeaderMob.btn}>
          <div className={HeaderMob.blockBtn}>
            <Link href="./../category"><button className={router === '/category' || router === '/category/Pollos' || router === '/category/Picar' || router === '/category/Tortillas' || router === '/category/Menu' || router === '/category/Bolsa' ? `${HeaderMob.active}` : `${HeaderMob.normal}`}>categoria</button></Link>
            <Link href="/"><button className={router === '/' ? `${HeaderMob.active}` : `${HeaderMob.normal}`}>productos</button></Link>
            <button className={HeaderMob.normal} onClick={handleCartToggle}>compras</button>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Header;
