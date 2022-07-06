import React from "react"
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import useForm from "../../Hooks/useForm"
import useFetch from "../../Hooks/useFetch"
import { PASSWORD_RESET } from "../../Api"
import Error from "../Helper/Error"
import { useNavigate } from "react-router-dom"
import Head from "../Helper/Head"

export default function LoginReset() {
  const [login, setLogin] = React.useState("")
  const [key, setKey] = React.useState("")
  const password = useForm()
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get("key")
    const login = params.get("login")
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      })
      const { res } = await request(url, options)
      if (res.ok) navigate("/login")
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resetar Senha" description="Página de reset de senha do site Moments"/>
      <h1 className='title'>Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label='Nova Senha'
          type='password'
          name='password'
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  )
}
