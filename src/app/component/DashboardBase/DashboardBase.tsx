'use client'
import {
    Card,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Text,
    Title
} from '@tremor/react';
import { ListUsageExample } from '../test/tremorTest/ListUsageExample';
import { DonutChartUsageExample } from '../test/tremorTest/DonutChartUsageExample';
import Porcentaje from '../porcentaje/Porcentaje';
import Stadist from '../stadist/Stadist';
import Dashboard from '../../dashboard/page';
import Comunas from '../comuna/Comuna';
import Chat from '../chat/Chat';
import Pagos from '../pagos/Pagos';
import Reciente from '../recientes/Reciente';
import { SparkChartHero } from '../test/tremorTest/SparkChartHero';
import { CardExample } from '../test/tremorTest/CardExample';

const DashboardBase = () => {
    return (
        <main className="bg-slate-200 w-full p-6 sm:p-10">
            <Title>Dashboard</Title>
            <Text>Ejemplo dashboard responsive</Text>

            <TabGroup>
                <TabList defaultValue={0} variant="solid">

                    <Tab value={0}>Vista General</Tab>
                    <Tab value={1}>Ocupación por zona</Tab>
                    <Tab value={2}>Taza de conversión</Tab>
                    <Tab value={3}>Ocupación</Tab>
                    <Tab value={4}>Propiedades Listadas</Tab>
                    <Tab value={5}>Valores por Comuna</Tab>
                    <Tab value={6}>Mensajes</Tab>
                    <Tab value={7}>Metodos de pagos</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card>
                            <Dashboard />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <ListUsageExample />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <DonutChartUsageExample />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <SparkChartHero />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card className='grid grid-cols-4 gap-2'>
                           <CardExample titleOut={'Total de Propiedades Listadas'} dataTitle1={'Deptos.'} data1={'50'} dataTitle2={'Casa'} data2={'44'} dataTitle3={'Proyectos'} data3={'10'}/>
                           <CardExample titleOut={'Ingresos Totales'} dataTitle1={'Compras'} data1={'$5,4 Mill'} dataTitle2={'Ventas'} data2={'$17.4 Mill'} dataTitle3={'Alquileres'} data3={'$10.3 Mill'} />
                           <CardExample titleOut={'Total de Transacciones Realizadas'} dataTitle1={'Comprass'} data1={'50'} dataTitle2={'Ventas'} data2={'44'} dataTitle3={'Alquileres'} data3={'10'} />
                           <CardExample titleOut={'Total de Usuarios Activos'} dataTitle1={'Compradores'} data1={'50'} dataTitle2={'Vendedores'} data2={'44'} dataTitle3={'Inmobiliarias'} data3={'10'} />
                        </Card>
                       </TabPanel>
                    <TabPanel>
                        <Card>
                            <Comunas />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <Chat />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card className='flex flex-row justify-evenly'>
                            <Pagos />
                            <Reciente />
                        </Card>
                    </TabPanel>
                </TabPanels>
            </TabGroup>

        </main>
    )
}

export default DashboardBase