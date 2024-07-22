import Style from './transacciones.module.css'
export default function Transacciones() {
  return (

    <div className={Style.component}>
      <p className='mt-1 text-center'>Total Transacciones realizadas</p>
      {/* Ingresar una tabla */}

      <div className={Style.cardComponent}>

        <div className={Style.transacCard}>
          <p className='card-title'>Compras</p>
          <p className='card-text fw-bold'>50</p>
        </div>

        <div className={Style.transacCard}>
          <p className='card-title'>Ventas</p>
          <p className='card-text fw-bold'>44</p>
        </div>

        <div className={Style.transacCard}>
          <p className='card-title'>Alquileres</p>
          <p className='card-text fw-bold'>10</p>
        </div>

      </div>
    </div>

  )
}