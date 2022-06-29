import React from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { ReactComponent as Logo } from "../Assets/logo.svg"
import { UserContext } from "../UserContext"
import useMedia from "../Hooks/useMedia"

export default function Header() {
  const { data } = React.useContext(UserContext)
  const mobile = useMedia("(max-width: 40rem)")

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Moments - Home'>
          <Logo />
        </Link>
        {data ? (
          <Link className={styles.login} to='/conta'>
            {!mobile && data.name}
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
