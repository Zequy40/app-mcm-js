'use client'
import { useEffect, useState } from "react";
import Logo from '@/public/mcm.svg';
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Link from "next/link";
import BillM from './../styles/Factura.module.css'


const inter = Rubik({ weight: ['400', '600'], subsets: ['latin'] })



function Bill() {
    useEffect(() => {
        const item = localStorage.getItem("cart")
        const products = JSON.parse(item)
        if (products && products.length > 0) {
            setState(products);
          } else {
            // Si no hay productos en el localStorage, muestra un mensaje
            alert("No hay productos para facturar");
          }
    }, [])
    const [state, setState] = useState([])
    const subtotal = state.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const tax = subtotal * 0.10
    const totalParcial = subtotal - tax
    const date = new Date()
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const handleGeneratePDF = () => {
        window.print();
    };

    console.log(state);


    return (
        <>
            <div className={`${BillM.m4} ${BillM.p4} ${BillM.maxw400}`}>
                <div className={`${BillM.flex} ${BillM.itemscenter} ${BillM.justifycenter} ${BillM.flexcol}`}>
                    <Image src={Logo} alt="Logo los pollito mi compare migue" className={BillM.w28}></Image>
                    <div className={`${inter.className} ${`${BillM.textcenter} ${BillM.uppercase} ${BillM.fontbold}`}`}>LOS POLLITO MI COMPARE MIGUE</div>
                    <div className={`${BillM.textcenter} ${BillM.uppercase}`}>EL PUERTO DE SANTA MARIA</div>
                    <div className={`${BillM.textcenter} ${BillM.uppercase}`}>RONDA DE LAS DUNAS</div>
                    <div className={`${BillM.textcenter} ${BillM.uppercase}`}>LOCAL 10, 11</div>
                    <div className={`${BillM.textcenter} ${BillM.uppercase}`}>11500, SPAIN</div>
                    <div className={`${BillM.textcenter} ${BillM.uppercase}`}>NIF: 48886345Y</div>
                    <div className={`${BillM.flex} ${BillM.justifybetween} ${BillM.wfull} ${BillM.bordery} ${BillM.borderblack} ${BillM.mt4}`}>
                        <div className={`${BillM.flex} ${BillM.justifybetween} ${BillM.gap2}`}>
                            <p className={BillM.fontextrabold}>Cant.</p>
                            <p className={BillM.fontextrabold}>Descripción</p>
                        </div>
                        <p className={BillM.fontextrabold}>Precio Unitario</p>
                    </div>

                </div>
                {state?.map((product) => (
                    <div className={`${BillM.flex} ${BillM.justifybetween} ${BillM.wfull} ${BillM.borderb} ${BillM.bordergray400} ${BillM.my4} ${BillM.py2}`} key={product.id}>
                        <div className={`${BillM.flex} ${BillM.justifybetween} ${BillM.gap2} `}>
                            <p className={BillM.textsm}>{product.quantity}</p>
                            <p className={BillM.textsm}>{product.title}</p>
                        </div>
                        <p className={BillM.textsm}>{product.price} €</p>
                    </div>
                ))}

                <div className={`${BillM.flex} ${BillM.flexcol} ${BillM.gap2} ${BillM.borderb} ${BillM.bordergray400} `}>
                    <div className={`${BillM.flex} ${BillM.justifybetween}`}>
                        <p>Subtotal</p>
                        <p>{subtotal.toFixed(2)} €</p>
                    </div>
                    <div className={`${BillM.flex} ${BillM.justifybetween}`}>
                        <p className={`${BillM.textlg} ${BillM.fontbold} ${BillM.uppercase} `}>Total</p>
                        <p className={`${BillM.textlg} ${BillM.fontbold} ${BillM.uppercase} `}>{subtotal.toFixed(2)}€</p>
                    </div>
                </div>

                <div className={`${BillM.flex} ${BillM.justifybetween}${BillM.borderb} ${BillM.bordergray400} ${BillM.py4}`}>
                    <div>
                        <p className={`${BillM.textbase} ${BillM.fontbold} ${BillM.uppercase}`}>Tasa</p>
                        <p>10%</p>
                    </div>
                    <div>
                        <p className={`${BillM.textbase} ${BillM.fontbold} ${BillM.uppercase}`}>SIN IVA</p>
                        <p>{totalParcial.toFixed(2)} €</p>
                    </div>
                    <div>
                        <p className={`${BillM.textbase} ${BillM.fontbold} ${BillM.uppercase}`}>IVA Inc.</p>
                        <p>{subtotal.toFixed(2)} €</p>
                    </div>
                </div>

                <div className={`${BillM.flex} ${BillM.itemscenter} ${BillM.justifycenter} ${BillM.flexcol} ${BillM.my10}`}>
                    <p>{formattedDate}</p>
                    <p>FACTURA SIMPLIFICADA</p>
                </div>

                <div>Gracias por comprar en los pollito mi compare migue</div>
                <div className={`${BillM.flex} ${BillM.gap4} ${BillM.justifycenter} ${BillM.mt4} ${BillM.hidden}`}>
                    <button
                        className={`${BillM.bgindigo600} ${BillM.textwhite} ${BillM.py2} ${BillM.px4} ${BillM.rounded}`} onClick={handleGeneratePDF}
                    >
                        Imprimir
                    </button>
                    <Link href={'/'} className={`${BillM.bggreen600} ${BillM.textwhite} ${BillM.py2} ${BillM.px4} ${BillM.rounded}`}>Volver</Link>
                </div>
            </div>
        </>
    )
}

export default Bill