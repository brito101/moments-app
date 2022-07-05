import React from 'react'
import Feed from '../Components/Feed/Feed'
import Head from './Helper/Head'

export default function Home() {
  return (
    <section className='container mainContainer'><Head title="Home" description="Site com postagem de fotos pessoais"/><Feed /></section>
  )
}
