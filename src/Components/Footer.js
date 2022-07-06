import React from "react"
import styles from "./Footer.module.css"
import { ReactComponent as Logo } from "../Assets/logo.svg"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <p>Todos os direitos reservados</p>
    </footer>
  )
}
