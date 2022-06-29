import React from 'react'
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';

export default function PhotoContent({data}) {
  const { photo } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.name} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
