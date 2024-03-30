import './../globals.css'
import { Quattrocento_Sans } from 'next/font/google'
import Providers from '@/store/provider';
import Header from '../components/header';
import Carts from '../components/carts';

const inter = Quattrocento_Sans({ weight: '400', subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
        <body>
          <Header />
          <div className='relative top-[4.25rem]'>
          <Carts />
          <div>{children}</div></div></body>
      </Providers>
    </html>
  )
}
