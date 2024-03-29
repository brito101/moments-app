import React from "react"
import styles from "./UserPhotoPost.module.css"
import useForm from "../../Hooks/useForm"
import useFetch from "../../Hooks/useFetch"
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import Error from "../Helper/Error"
import { PHOTO_POST } from "../../Api"
import { useNavigate } from "react-router-dom"
import Head from "../Helper/Head"

export default function UserPhotoPost() {
  const name = useForm()
  const description = useForm()
  const [img, setImg] = React.useState({})
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (data) navigate("/conta")
  }, [data, navigate])

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append("img", img.raw)
    formData.append("name", name.value)
    formData.append("description", description.value)

    const token = window.localStorage.getItem("token")
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Postagem de Foto" description="Página de postagem de foto do site Moments"/>
      <form onSubmit={handleSubmit}>
        <Input label='Título' type='text' name='name' {...name} />
        <input
          className={styles.file}
          type='file'
          name='img'
          id='img'
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  )
}
