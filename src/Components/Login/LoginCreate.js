import React from "react"
import Input from "../Forms/Input"
import Button from "../Forms/Button"
import Error from '../Helper/Error';
import useForm from "../../Hooks/useForm"
import { USER_POST } from "../../Api"
import useFetch from '../../Hooks/useFetch';
import Head from "../Helper/Head";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/user";

export default function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const dispatch = useDispatch();
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { res } = await request(url, options);
    if (res.ok)
      dispatch(
        userLogin({ username: username.value, password: password.value }),
      );
  }

  return (
    <section className='animeLeft'>
      <Head title="Cadastro" description="Página de cadastro do site Moments"/>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Email' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}
