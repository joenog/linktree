import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { FormEvent, useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { db } from "../../services/firebaseConnection";
import { LinkProps } from "../../types/LinkProps";
import {
  addDoc,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
  collection
} from "firebase/firestore";

export function Admin() {

  const [nameImput, setNameImput] = useState("");
  const [urlImput, setUrlImput] = useState("");
  const [textColorImput, setTextColorImput] = useState("#f1f1f1");
  const [bgColorImput, setBgColorImput] = useState("#121212");
  const [links, setLinks] = useState<LinkProps[]>([])

  //ADD DB LINKS
  function handleRegister(e: FormEvent) {
    e.preventDefault();
    
    if (nameImput === "" || urlImput === "") {
      alert("Preencha os campos...")
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameImput,
      url: urlImput,
      bg: bgColorImput,
      color: textColorImput,
      created: new Date()
    })
    .then(() => {
      setNameImput("");
      setUrlImput("");
      console.log("Cadastrado com sucesso!")
    })
    .catch((error) => {
      console.log(error + "Erro ao cadastrar no banco de dados!")
    })

  };

  //READ BD LINKS
  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryRef = query(linksRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      const lista = [] as LinkProps[];

      snapshot.forEach((doc)=> {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color
        })
        
      });

      setLinks(lista);
      console.log(links);
    });

    return () => {
      unsub();
      console.log("Listener fechado!!")
    }
  }, []);

  //DELETE DB LINKS
  async function handleDeleteLink(id: string) {

    const docRef = doc(db, "links", id);
    await deleteDoc(docRef);
  }

  return(
    <div className="flex flex-col min-h-screen items-center mx-3 pb-7 py-2">
      <Header />
      
      <form action="" onSubmit={handleRegister} className="flex flex-col m-3 mb-3 w-full max-w-xl">

        <label className="text-amber-50 font-medium mt-8 mb-3" htmlFor="">Nome do link</label>
        <Input placeholder="Digite o nome do link..."
          value={nameImput}
          onChange={(e) => setNameImput(e.target.value)}
        />

        <label className="text-amber-50 font-medium mb-3" htmlFor="">Url do Link</label>
        <Input
          placeholder="Digite o url do link"
          value={urlImput}
          onChange={(e) => setUrlImput(e.target.value)}
          />

        <section className="flex my-4 gap-5">
          <div className="flex gap-4">
            <label className="text-amber-50 font-medium mb-3" htmlFor="">Cor do Link</label>
            <input 
              className="rounded-2xl"
              type="color" 
              value={textColorImput}
              onChange={(e) => setTextColorImput(e.target.value)}
              />
          </div>

            <div className="flex gap-4">
            <label className="text-amber-50 font-medium mb-3" htmlFor="">Fundo do Link</label>
            <input 
              className="rounded-2xl"
              type="color" 
              value={bgColorImput}
              onChange={(e) => setBgColorImput(e.target.value)}
              />

          </div>
        </section>

        {nameImput !== "" && (
          <div className="flex items-center justify-start flex-col mb-7 p-1 border border-gray-100/25 rounded-xl">
          <label className="text-lg mt-2 mb-3 text-amber-50" htmlFor="">Veja como está ficando:</label>
          <article className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 m-2 rounded-lg px-4 py-2"
            style={{marginTop: 8, marginBottom: 8, backgroundColor: bgColorImput}}
          >
            <p style={{color: textColorImput}}>{nameImput}</p>
          </article>
        </div>
        )}

        <button type="submit" className="mg-7 bg-blue-900 rounded-xl text-white font-medium gap-4 p-2 flex items-center justify-center">
          Cadastrar
        </button>
      </form>

      <h2 className="text-2xl text-amber-50 my-4">Meus Links</h2>
      { links.map( (item) => (
        <article key={item.id} className="flex gap-4 items-center justify-between w-11/12 max-w-xl rounded-lg py-3 px-4 mb-2"
        style={{backgroundColor: item.bg, color: item.color}}
      >
        <p className="text-xl">{item.name}</p>
        <div>
          <button onClick={()=> handleDeleteLink(item.id)} className="flex bg-amber-50 rounded-xl p-1"> <BiTrash size={22} color="darkred"/> </button>
        </div>
      </article>
      ))}
    </div>
  )
  
}