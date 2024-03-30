import './globals.css'
import { Quattrocento_Sans } from 'next/font/google'
import Providers from '@/store/provider';

const inter = Quattrocento_Sans({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'App MCM',
  description: 'App gestion',
  icons: {
    icon: {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/mcm.svg'
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
        <body className={inter.className}>
     
        {children}
       </body>
      </Providers>
    </html>
  )
}