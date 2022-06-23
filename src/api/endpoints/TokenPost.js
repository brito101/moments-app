import React from "react"

export default function TokenPost() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [token, setToken] = React.useState("")

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
        setToken(json.token)
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
        type='password'
        placeholder='***'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      ></input>
      <button>Enviar</button>
      <p style={{ wordBreak: "break-all" }}>{token}</p>
    </form>
  )
}
