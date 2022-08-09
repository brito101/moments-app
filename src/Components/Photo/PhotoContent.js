import React from "react"
import styles from "./PhotoContent.module.css"
import { Link } from "react-router-dom"
import PhotoDelete from "./PhotoDelete"
import Image from "../Helper/Image"
import { useSelector } from 'react-redux';

export default function PhotoContent() {
  const { user } = useSelector((state) => state);
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
            {new Date(photo.date).toLocaleString("pt-br")}
          </p>
        </div>
      </div>
    </div>
  )
}
