import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { UserContext } from "../../UserContext"
import LoginCreate from "./LoginCreate"
import LoginForm from "./LoginForm"
import LoginLost from "./LoginLost"
import LoginReset from "./LoginReset"
import styles from './Login.module.css'
import NotFound from "../NotFound"

export default function Login() {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='cadastro' element={<LoginCreate />} />
        <Route path='recuperar-senha' element={<LoginLost />} />
        <Route path='resetar-senha' element={<LoginReset />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
    </section>
  )
}
