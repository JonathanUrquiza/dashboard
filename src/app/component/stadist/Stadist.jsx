'use client'
import {
  component,
  cardComponent
} from './stadist.module.css'
import Card from './cadComponent/Card'
import Promesas from '../test/Promesas'
const ExcelJS = require('exceljs')

export default function Stadist({title}) {
  return (
    /* Este componenete renderiza las card */
    <>
    <div className={component}>
      <p className="mt-4 text-center">{title}</p>
        {/* Ingresar una tabla */}

        <div className={cardComponent}>
        {/* <Card cardTitleInfo={'deptos'} cardTextInfo={'50'}/>
        <Card cardTitleInfo={'Casas'}  cardTextInfo={'50'}/>
        <Card cardTitleInfo={'Proyectos'}  cardTextInfo={'10'}/> */}
        <Promesas></Promesas>
        </div>
    </div>
    </>
  
  )
}
