import {login} from './Utils'

import './Form.css'

import { useState } from 'react'

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
//  O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
//  Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
//  Desabilite o botão de Login equanto você está executando o login.
//  Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
//  Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function Form() {

  //controle dos inputs
  const [email, setEmail] = useState(''); //estado para o input email
  const [password, setPassword] = useState(''); //estado para o input password
  const [error, setError] = useState(null); //estado para o erro
  const [isRequesting, setIsRequesting] = useState(false); //estado para o loading
 
  //função para controlar o input email
  const handleEmail = (e) => {
    const value = e.target.value; //recebe o valor do input
    setEmail(value); //seta o valor do input no estado
  };

  //função para controlar o input password
  const handlePassword = (e) => {
    const value = e.target.value; //recebe o valor do input
    setPassword(value); //seta o valor do input no estado
  };

  //função para controlar o botão de login
  const handleSubmit = () => {
    setError(null) //seta o estado error como null
    setIsRequesting(true) //manda a requisição pro servidor
    
    let values = {email: email, password: password} //cria um objeto com os valores dos inputs
    
    login(values) //chama a função login passando o objeto como parâmetro
    
    //tratando a promise da funcao login
    .then(() => {
      alert('Login realizado com sucesso!')
    }) //se a promise for resolvida
    .catch((error) =>{ //se a promise for rejeitada
      setError(error) //seta o estado error com o erro.
    })
    .finally(() =>{ //sempre que a promise for resolvida ou rejeitada. independente do resultado
      setIsRequesting(false) //seta o estado isRequesting como false
    })
  };

  return (
    <div>
      <div className="loginform">
        <h1>Login Form 🐞</h1>
        {error && <div className="errorMessage">{error.message}</div>} {/*se o estado error for true, mostra a mensagem de erro*/}
        <div className="row">
          <label htmlFor="{'email'}">Email:</label>
          <input type="email" name="email" id="email" autoComplete='off'
           value={email}
           onChange={handleEmail}/> 
        </div>
        <div className="row">
          <label htmlFor="{'password'}">Password:</label>
          <input type="password" id={'password'} 
          value={password}
          onChange={handlePassword}/>
      </div>
      <div className="button">
        <button onClick={handleSubmit}
        disabled={email === '' || password.length < 6 || isRequesting} //desabilita o botão se o email estiver vazio ou a senha tiver menos de 6 caracteres ou se a requisição estiver sendo feita
        >Login</button>
      </div>
    </div>
    </div>
  )
}
