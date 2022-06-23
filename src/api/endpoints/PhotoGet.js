import React from "react"

export default function PhotoGet() {
  const [id, setId] = React.useState("")

  function handleSubimit(e) {
    e.preventDefault()
    fetch(`http://localhost/moments/json/api/photo/${id}`)
      .then((res) => res.json())
      .then((json) => console.log(json))
  }

  return (
    <form onSubmit={handleSubimit}>
      <input type='text' value={id} onChange={({target}) => setId(target.value)}></input>
      <button>Enviar</button>
    </form>
  )
}
