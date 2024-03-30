'use client'
import { Fragment, useMemo, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { returnProduct, saveProduct, toggleCart } from '@/store/slice';
import { useRouter } from 'next/navigation'
import Cart from './../styles/Cart.module.css'


export default function Example() {
    const isOpen = useSelector((state) => state.cart.isOpen)
    const dispatch = useDispatch()

    const cart = useSelector(state => state.misCompras.myCart)
    const dispatchCart = useDispatch()

    const handleCloseCart = () => {
        dispatch(toggleCart()); // Despachar la acción toggleCart para cerrar el carrito
    }

    const [total, setTotal] = useState(0)

    const totalCart = useMemo(() => setTotal(cart.reduce((acumulador, valorActual) => acumulador + valorActual.price * valorActual.quantity, 0)), [cart])

    const eliminar = (product) => {
        dispatch(returnProduct(product))
    }
    const HandleVaciarCart = () => {
        dispatch(saveProduct())
    }
    const router = useRouter()

    const HandleFinalizarCompra = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch(saveProduct())
        handleCloseCart()
        router.push('/factura')
    }

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className={`${Cart.relative} ${Cart.z10}`} onClose={handleCloseCart}>
                <Transition.Child
                    as={Fragment}
                    enter={`${Cart.easeinout} ${Cart.duration500}`}
                    enterFrom={Cart.opacity0}
                    enterTo={Cart.opacity100}
                    leave={`${Cart.easeinout} ${Cart.duration500}`}
                    leaveFrom={Cart.opacity100}
                    leaveTo={Cart.opacity0}
                    
                >
                    <div className={Cart.dialog} />
                </Transition.Child>

                <div className={Cart.div}>
                    <div className={Cart.contain}>
                        <div className={Cart.container}>
                            <Transition.Child
                                as={Fragment}
                                enter={`${Cart.transform} ${Cart.transition} ${Cart.easeinout} ${Cart.duration500} ${Cart.duration700}`}
                                enterFrom={Cart.translatexfull}
                                enterTo={Cart.translatex0}
                                leave={`${Cart.transform} ${Cart.transition} ${Cart.easeinout} ${Cart.duration500} ${Cart.duration700}`}
                                leaveFrom={Cart.translatex0}
                                leaveTo={Cart.translatexfull}
                            >
                                <Dialog.Panel className={Cart.panel}>
                                    <div className={Cart.panelDiv}>
                                        <div className={Cart.div2}>
                                            <div className={Cart.div3}>
                                                <Dialog.Title className={Cart.title}>Shopping cart</Dialog.Title>
                                                <div className={Cart.divTitle}>
                                                    <button
                                                        type="button"
                                                        className={Cart.btn}
                                                        onClick={() => handleCloseCart()}
                                                    >
                                                        <span className={Cart.span} />
                                                        <span className={Cart.span2}>Close panel</span>
                                                        <XMarkIcon className={Cart.mark} aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className={Cart.div4}>
                                                <div className={Cart.div5}>
                                                    <ul role="list" className={Cart.div6}>
                                                        {cart.length > 0 ?
                                                            (cart.map((valor, indice) => (
                                                                <li key={indice} className={Cart.div7}>


                                                                    <div className={Cart.div8}>
                                                                        <div>
                                                                            <div className={Cart.div9}>
                                                                                <h3>
                                                                                    <Link href={`/products/${valor.id}`}>{valor.category}</Link>
                                                                                </h3>
                                                                                <p className={Cart.div10}>{valor.price}€</p>
                                                                            </div>
                                                                            <p className={Cart.div11}>{valor.title}</p>
                                                                        </div>
                                                                        <div className={Cart.div12}>
                                                                            <p className={Cart.div13}>Qty: {valor.quantity}</p>

                                                                            <div className={Cart.div14}>
                                                                                <button
                                                                                    type="button"
                                                                                    className={Cart.btn2}
                                                                                    onClick={() => eliminar(valor.id)}
                                                                                >
                                                                                    Eliminar
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )))
                                                            :
                                                            (<li className={Cart.div15}>No hay producto en el carrito</li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={Cart.div16}>
                                            <div className={Cart.div17}>
                                                <p>Total</p>
                                                <p>{total}€</p>
                                            </div>

                                            <div className={Cart.div18}>
                                                <button
                                                    onClick={()=>HandleFinalizarCompra()}
                                                    href="#"
                                                    className={Cart.div19}>
                                                    finalizar compra
                                                </button>
                                            
                                                <button
                                                    onClick={()=>HandleVaciarCart()}
                                                    href="#"
                                                    className={Cart.div20}>
                                                    vaciar carrito
                                                </button>
                                            </div>
                                            <div className={Cart.div21}>
                                                <p>
                                                    o&nbsp;
                                                    <button
                                                        type="button"
                                                        className={Cart.div22}
                                                        onClick={handleCloseCart}
                                                    >
                                                        Seguir Comprando
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
