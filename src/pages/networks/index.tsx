import { FormEvent, useState } from "react";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { db } from "../../services/firebaseConnection";
import { 
  setDoc,
  doc,
  getDoc
 } from "firebase/firestore";

export function Networks() {

  const [github, setGuithub] = useState("");
  const [linkedin, setLinekdin] = useState("");
  const [instagram, setInstagram] = useState("");

  function handleRegiste(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      github: github,
      linkedin: linkedin,
      instagram: instagram
    })
    .then(() => {
      console.log("cadastrado com sucesso");
    })
    .catch((err) => {
      console.log(err + "erro ao cadastrar");
    })
  }

  return(
    <div className="flex flex-col items-center mb-7 px-2 min-h-screen">
      <Header />

      <h1 className="text-xl text-white font-bold mt-8 mb-4">Minhas redes sociais</h1>
      <form className="flex flex-col max-w-lg w-full" action="" onSubmit={handleRegiste}>

        <label className="text-white mt-2 mb-3" htmlFor="">Link do Github</label>
        <Input
          placeholder="Digite a url do facebook..."
          value={github}
          onChange={(e) => setGuithub(e.target.value)}
        />

        <label className="text-white mb-3 mt-2" htmlFor="">Link do Linkedin</label>
        <Input
          placeholder="Digite o link do Linkedin"
          value={linkedin}
          onChange={(e) => setLinekdin(e.target.value)}
        />

        <label className="text-white mb-3 mt-2" htmlFor="">Link do Inatagram</label>
        <Input
          placeholder="Digite o link do Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <button className="flex items-center justify-center bg-blue-800 rounded-xl text-white p-2 mb-7"  type="submit">
          Salvar links
        </button>
      </form>

    </div>
  )
  
}