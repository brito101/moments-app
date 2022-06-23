import React from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { ReactComponent as Logo } from "../Assets/logo.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label="Moments - Home">
          <Logo />
        </Link>
        <Link className={styles.login} to='/login'>Login / Cadastro</Link>
      </nav>
    </header>
  )
}
