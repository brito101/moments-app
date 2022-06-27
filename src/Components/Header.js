import React from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { ReactComponent as Logo } from "../Assets/logo.svg"
import { UserContext } from "../UserContex"

export default function Header() {
  const { data, userLogout } = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Moments - Home'>
          <Logo />
        </Link>
        {data ? (
          <Link className={styles.login} to='/conta'>
            {data.name}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}
