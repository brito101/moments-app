import React from "react"
import Error from "../Helper/Error"
import Loading from "../Helper/Loading"
import PhotoContent from "../Photo/PhotoContent"
import styles from "./FeedModal.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../../store/photo';

export default function FeedModal({ photo, setModalPhoto }) {
  const { loading, error, data } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [dispatch, photo]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  )
}
