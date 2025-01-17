'use client'
import Link from "next/link"
import Image from "next/image"
import visa from '../../../assets/icons/visa.png'
import bancaria from '../../../assets/icons/bancaria.png'
import paypal from '../../../assets/icons/paypal.png'
import efectivo from '../../../assets/icons/efectivo.png'
import Style from './pagos.module.css'


export default function Pagos() {
    return (
      <div className={Style.component}>
          <h6 className="mt-4 text-center">Metodos de pago utilizados</h6>
  
          <ul className="text-dark">
              <li className="d-flex flex-row">
                  <Image src={visa} alt="Logo de visa"/><p className="px-4">Tarjeta de crédito</p>
              </li>
              <li className="d-flex flex-row">
              <Image src={bancaria} alt="Logo de banco"/><p className="px-4">Transferencia Bancarias</p>
              </li>
              <li className="d-flex flex-row">
              <Image src={efectivo} alt="Logo de dinero"/><p className="px-4">Efectivo</p>
              </li>
              <li className="d-flex flex-row">
              <Image src={paypal} alt="Logo de paypal"/><p className="px-4" >Paypal</p>
              </li>
          </ul>
      </div>    
    )
  }   
  