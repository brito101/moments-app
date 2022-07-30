import React from "react"
import { Route, Routes } from "react-router-dom"
import Feed from "../Feed/Feed"
import Head from "../Helper/Head"
import NotFound from "../NotFound"
import UserHeader from "./UserHeader"
import UserPhotoPost from "./UserPhotoPost"
import UserStats from "./UserStats"
import { useSelector } from 'react-redux';

export default function User() {
  const { data } = useSelector((state) => state.user);
  return (
    <section className='container'>
      <Head title="Minha Conta" description="Página de conta do usuário no site Moments"/>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </section>
  )
}
