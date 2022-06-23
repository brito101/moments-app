import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginCreate from "./LoginCreate"
import Loginform from "./Loginform"
import LoginLost from "./LoginLost"
import LoginReset from "./LoginReset"

export default function Login() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Loginform />} />
        <Route path='cadastro' element={<LoginCreate />} />
        <Route path='recuperar-senha' element={<LoginLost />} />
        <Route path='resetar-senha' element={<LoginReset />} />
      </Routes>
    </div>
  )
}
