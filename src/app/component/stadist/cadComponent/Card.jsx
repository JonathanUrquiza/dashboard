'use client'
import React from 'react'
import {
    stadistCard,
    cardTitle,
    cardText
} from '../stadist.module.css'

export default function Card({cardTitleInfo, cardTextInfo}) {
  return (
    /* Este componente es el que lista los objetos y los pasas por porps a stadist.jsx */
    <div className={stadistCard}>
    <p className={cardTitle}>{cardTitleInfo}</p>
    <p className={cardText}>{cardTextInfo}</p>
    </div>
  )
}
