import React from "react"
import styles from "./Loading.module.css"
import { ReactComponent as Load } from "../../Assets/loading.svg"

export default function Loading() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
       <Load />
      </div>
    </div>
  )
}
