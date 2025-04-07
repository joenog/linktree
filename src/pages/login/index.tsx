import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { FormEvent, useState } from "react";
import { auth } from "../../services/firebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    if (email === '' || password === '') {
      alert("Preencha todos os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate("/admin", {replace: true}) // replace - o user n poderá voltar a página anterior com o voltar do navegador.
      console.log("LOGADO COM SUCESSO!");
    })
    .catch((error) => {
      console.log({
        message: 'FALHA NO LOGIN',
        error: error
      })
    })
  }

  return(
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <Link to={'/'}>
          <h1 className="text-amber-50 mt-11 mb-7 font-bold text-5xl">Dev
            <span className="bg-gradient-to-r from-blue-500 to-blue-950 bg-clip-text text-transparent">Link</span>
          </h1>
        </Link>

        <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-4" action="">
          <Input 
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />

          <Input
            placeholder="********"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />

          <button 
            typeof="submit" 
            className="h-9 bg-blue-800 rounded-lg text-amber-50 text-lg" type="submit">
            Acessar
          </button>
        </form>
      </div>
    </>
  )
  
}