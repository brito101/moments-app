import React from "react"
import Head from "./Helper/Head"

export default function NotFound () {
  return (
    <div className='container mainContainer'>
      <Head title="404" description="Página não encontrada"/>
      <h1 className='title'>Erro: 404</h1>
      <p>Página não encontrada.</p>
    </div>
  )
}