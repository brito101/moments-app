import React from "react"
import { Link } from "react-router-dom"

export default function Loginform() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost/moments/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
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
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        ></input>
        <input
          type='password'
          placeholder='***'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        ></input>
        <button>Enviar</button>
      </form>
      <Link to='/login/cadastro'>Cadastro</Link>
    </section>
  )
}
