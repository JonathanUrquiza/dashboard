import React, { use } from 'react'
import CardContainer from './cadComponent/CardContainer'
import { useState, useEffect } from 'react'
import { propiedades } from './cadComponent/propiedades'

export default function stadistContainer() {
  /* Este componente es el que genera la promesa y genera las cardContainer hace la petición*/
  const [Loading, setLoading] = useState(true)
  const [datainfo, setDataInfo] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let info = new Promise((res, rej) => {
      res(datos);
      rej('No hay datos')
    })
    info
    .then((res) => {
      setDataInfo(res)
    })
    .catch((error) => {
      setError(error)
    })
    .finally(()=>{
      setLoading(false)
    })

  }, []);

  return (
    <>
      {propiedades.map((item) => {
    console.log(item)
  })}
  <CardContainer/>
    </>
  )

}
