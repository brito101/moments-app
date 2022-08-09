import React from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { ReactComponent as Logo } from "../Assets/logo.svg"
import useMedia from "../Hooks/useMedia"
import { useSelector } from 'react-redux';

export default function Header() {
  const { data } = useSelector((state) => state.user);
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
            Login
          </Link>
        )}
      </nav>
    </header>
  )
}
