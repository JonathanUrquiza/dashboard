import { Card, Text } from '@tremor/react';
import React from 'react'
import { useState, useEffect } from 'react'

export default function Promesas() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(0);
    const [error, setError] = useState('');

    const datos = [
        { 'Deptos': 50 },
        { 'Casas': 44 },
        { 'Proyectos': 10 }
    ]

    useEffect(() => {

        let promesaDatos = new Promise((res, rej) => {
            setTimeout(() => {
                res(datos);
            }, 3000);
            rej(err)
        });
        promesaDatos
            .then((res) => {
                setData(res)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);//Se renderiza una vez
    return (
  
        <>
              <div>
            {datos.map((item) => (
                <div>
                    <p>{item.Deptos}</p>
                    <p>{item.Casas}</p>
                    <p>{item.Proyectos}</p>
                </div>
            ))}
        </div>
        </>
    )
}