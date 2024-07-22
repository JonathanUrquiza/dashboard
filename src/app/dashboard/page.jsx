'use client'
import '@/app/dashboard/dashboard.css'
import Metrics from '../component/metrics/Metrics';
import Chat from '../component/chat/Chat';
import Zona from '../component/zona/Zona';
import Taza from '../component/taza/Taza';
import Porcentaje from '../component/porcentaje/Porcentaje';
import Ingresos from '../component/ingresos/Ingresos';
import Pagos from '../component/pagos/Pagos';
import Comunas from '../component/comuna/Comuna';
import Reciente from '../component/recientes/Reciente';
import Transacciones from '../component/Transacciones/Transacciones';
import Usuarios from '../component/Usuarios/Usuarios';


export default function Dashboard() {
    return (
        <div className='d-flex flex-row align-items-center w-100'>
            
            <section className="container-fluid dashboard">

                <h2>Dashboard</h2>
                <article className="stats row">
                    <div className="col-6 p-1">
                        {/* frontend del backoffice */}
                        <Zona/>
                    </div>
                    <div className="col-3 p-1">
                        {/* Tasa de conversión de propiedades */}
                        <Taza/>
                    </div>
                    <div className="col-3 p-1">
                        {/* Porcentaje de ocupación */}
                        <Porcentaje/>
                    </div>
                </article>

                <article className="metrics row">
                    <div className="col-3 p-1">
                        {/* Total de propuedades listadas */}
                        <Metrics/>
                    </div>
                    <div className="col-3 p-1">
                        {/* Ingresos totales */}
                        <Ingresos/>
                    </div>
                    <div className="col-3 p-1">
                        {/* Total de transacciones realizadas */}
                        <Transacciones/>
                    </div>
                    <div className="col-3 p-1">
                        {/* Total de Usuarios activos */}
                        <Usuarios/>
                    </div>
                </article>

                <article className="row pagos">
                    <div className="col-6 p-1">
                        {/* Valores por comuna */}
                        <Comunas/>
                    </div>
                    <div className="col-3 p-1">
                        {/* Mensaje recientes */}
                        <Chat/>
                    </div>
                    <div className="col-3 p-1 d-flex flex-column align-items-stretch justify-content-stretch">
                        {/* Metodos de pagos utilizados */}
                        <Pagos/>
                        {/* Transacciones realizadas */}
                        <Reciente/>
                    </div>
                </article>

            </section>
        </div>

    )
}
