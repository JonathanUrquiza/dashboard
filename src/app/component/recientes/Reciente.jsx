'use client'
import React from 'react'
import Style from './recientes.module.css'

export default function Reciente() {
    return (
        <div className={Style.component}>
            <h6 className="mt-4 text-center">Transacciones recientes</h6>
            
                <table className={Style.recientesCard}>
                    <thead>
                    <tr>
                        <th>Fechas</th>
                        <th>Hora</th>
                        <th>Tipo</th>
                        {/* <th>Propiedad</th> */}
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={Style.componentRow}>
                        <td>20/03/2024</td>
                        <td>8:45</td>
                        <td>A temp</td>
                        {/* <td>Monoambiente</td> */}
                        <td className={Style.textDanger}>Error</td>
                    </tr>
                    
                    <tr className={Style.componentRow}>
                        <td>20/03/2024</td>
                        <td>9:15</td>
                        <td>A def.</td>
                        {/* <td>2 ambiente</td> */}
                        <td className={Style.textWarning}>En proceso</td>
                    </tr>
                    
                    <tr className={Style.componentRow}>
                        <td>20/03/2024</td>
                        <td>8:45</td>
                        <td>A def.</td>
                        {/* <td>Casa</td> */}
                        <td className={Style.textCorrect}>Finalizada</td>
                    </tr>
                    
                    </tbody>
                </table>
            
        </div>
    )
}
