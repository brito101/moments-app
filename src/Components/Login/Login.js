import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { UserContext } from "../../UserContex"
import LoginCreate from "./LoginCreate"
import LoginForm from "./LoginForm"
import LoginLost from "./LoginLost"
import LoginReset from "./LoginReset"

export default function Login() {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />;

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='cadastro' element={<LoginCreate />} />
        <Route path='recuperar-senha' element={<LoginLost />} />
        <Route path='resetar-senha' element={<LoginReset />} />
      </Routes>
    </div>
  )
}
