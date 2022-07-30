import React from "react"
import styles from "./PhotoContent.module.css"
import { Link } from "react-router-dom"
import { UserContext } from "../../UserContext"
import PhotoDelete from "./PhotoDelete"
import Image from "../Helper/Image"
import { useSelector } from 'react-redux';

export default function PhotoContent() {
  const user = React.useContext(UserContext)
  const { photo } = useSelector((state) => state.photo.data);

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <p className={styles.date}>
            Postado em:{" "}
            {new Date(photo.date).toLocaleString("pt-br").slice(0, -3)}hs
          </p>
          <ul className={styles.attributes}>
            <li>{photo.description}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
