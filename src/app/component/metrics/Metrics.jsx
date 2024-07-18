import Style from './metrics.module.css'

export default function Metrics() {
  return (

    <div className={Style.component}>
      <p className="mt-1 text-center">Total Propiedades Listadas</p>
      {/* Ingresar una tabla */}

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
