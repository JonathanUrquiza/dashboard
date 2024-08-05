'use client'
import './dashboard.css'
import Zona from '../component/zona/Zona';
import Taza from '../component/taza/Taza';
import Porcentaje from '../component/porcentaje/Porcentaje';
import Metrics from '../component/metrics/Metrics';
import Ingresos from '../component/ingresos/Ingresos';
import Transacciones from '../component/Transacciones/Transacciones';
import Usuarios from '../component/Usuarios/Usuarios';
import Stadist from '../component/stadist/Stadist';
import Comunas from '../component/comuna/Comuna';
import Chat from '../component/chat/Chat';
import Pagos from '../component/pagos/Pagos';
import Reciente from '../component/recientes/Reciente';
import { ListUsageExample } from '../component/test/tremorTest/ListUsageExample';
import { DonutChartUsageExample } from '../component/test/tremorTest/DonutChartUsageExample';
import { SparkChartHero } from '../component/test/tremorTest/SparkChartHero';
import { CardExample } from '../component/test/tremorTest/CardExample';
import { Card } from '@tremor/react';


export default function Dashboard() {
    return (
        <div className='d-flex flex-row align-items-center w-100'>
            
            <section className="container-fluid dashboard">

                <h2>Dashboard</h2>
                <article className="stats row">
                    <div className="w-full col-6 p-1">
                        {/* frontend del backoffice */}
                        <ListUsageExample />
                    </div>
                    <div className="col-3 p-1">
                        {/* Tasa de conversión de propiedades */}
                        <DonutChartUsageExample />
                    </div>
                    <div className="col-3 p-1">
                        {/* Porcentaje de ocupación */}
                        <SparkChartHero />
                    </div>
                </article>

                <article className="metrics row">
                <Card className='grid grid-cols-4 gap-2'>
                            <CardExample titleOut={'Total de Propiedades Listadas'}
                            dataTitle1='Departamentos'
                            data1='50'
                            dataTitle2='Casa'
                            data2='44'
                            dataTitle3='Proyectos'
                            data3='10' />
                             <CardExample titleOut={'Ingresos Totales'}
                            dataTitle1='Compras'
                            data1='$5.4 Mill'
                            dataTitle2='Ventas'
                            data2='$ 17.2 Mill'
                            dataTitle3='Alquileres'
                            data3='$10.3 Mill' />
                            <CardExample titleOut={'Total de Transacciones Realizadas'}
                            dataTitle1='Compras'
                            data1='50'
                            dataTitle2='Ventas'
                            data2='44'
                            dataTitle3='Alquileres'
                            data3='10' />
                           <CardExample titleOut={'Total de Usuarios Activos'}
                            dataTitle1='Compradores'
                            data1='50'
                            dataTitle2='Vendedores'
                            data2='44'
                            dataTitle3='Inmobiliaria'
                            data3='10' />
                        </Card>
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
