import React from "react"

export default function PhotoPost() {
  const [token, setToken] = React.useState("")
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [img, setImg] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append("img", img)
    formData.append("name", name)
    formData.append("description", description)

    fetch("http://localhost/moments/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((json) => {
        console.log(json)
        return
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='token'
        value={token}
        onChange={({ target }) => setToken(target.value)}
      ></input>
      <input
        type='text'
        placeholder='Nome'
        value={name}
        onChange={({ target }) => setName(target.value)}
      ></input>
      <input
        type='text'
        placeholder='Descrição'
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      ></input>
      <input
        type='file'
        onChange={({ target }) => setImg(target.files[0])}
      ></input>
      <button>Enviar</button>
    </form>
  )
}
