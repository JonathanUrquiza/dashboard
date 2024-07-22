import  Style from './ingresos.module.css'
export default function Ingresos() {
  return (
    
    <div className={Style.component}>
        {/* Ingresar una tabla como metrics */}
        <p className="mt-1 text-center">Ingresos Totales</p>
        
        <div className={Style.cardComponent}>
        
        <div className={Style.ingresosCard}>
        <p className='card-title'>Compras</p>
        <p className='card-text fw-bold'>$5.4 mill</p>
        </div>
        
        <div className={Style.ingresosCard}>
        <p className='card-title' >Ventas</p>
        <p className='card-text fw-bold'>$17.2 mill</p>
        </div>
        
        <div className={Style.ingresosCard}>
        <p className='card-title'>Alquileres</p>
        <p className='card-text fw-bold'>$10.3 mill</p>
        </div>
        
        </div>
    </div>
    
  )
}