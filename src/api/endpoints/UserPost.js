import React from "react"

export default function UserPost() {
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost/moments/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      ></input>
      <input
        type='email'
        placeholder='e-mail'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      ></input>
      <input
        type='password'
        placeholder='***'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      ></input>
      <button>Enviar</button>
    </form>
  )
}
