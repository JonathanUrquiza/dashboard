'use client'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (<>
    <section>
        <article>
            <h1>404</h1>
            <p>Pagina No encontrada</p>
            <Link href="/">Volver</Link>
        </article>
    </section>
  </>
  )
}
