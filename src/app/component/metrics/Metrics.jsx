import Style from './metrics.module.css'
export default function Metrics() {
  return (

    <div className={Style.component}>
      {/* Ingresar una tabla */}
      <p className="mt-1 text-center">Total Propiedades Listadas</p>

      <div className={Style.cardComponent}>

        <div className={Style.metricsCard}>
          <p className='card-title'>Deptos.</p>
          <p className='card-text fw-bold'>50</p>
        </div>

        <div className={Style.metricsCard}>
          <p className='card-title'>Casas</p>
          <p className='card-text fw-bold'>44</p>
        </div>

        <div className={Style.metricsCard}>
          <p className='card-title'>Proyectos</p>
          <p className='card-text fw-bold'>10</p>
        </div>

      </div>
    </div>

  )
}
/* Este componente como ingresos.jsx, Transacciones.jsx y usuarios.jsx deberan ser un componente solo */