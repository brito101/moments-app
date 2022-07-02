import React from "react"
import styles from "./PhotoDelete.module.css"
import { PHOTO_DELETE } from "../../Api"
import useFetch from "../../Hooks/useFetch"

export default function PhotoDelete({id}) {
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?")
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { res } = await request(url, options)
      if (res.ok) window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  )
}
