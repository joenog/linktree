import { useEffect, useState} from "react";
import LinkProps from "../../types/LinkProps";
import SocialLinksProps from "../../types/SocialLinksProps";
import { Social } from "../../components/Social"
import { FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa"
import { db } from "../../services/firebaseConnection";
import { 
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc
 } from "firebase/firestore";
import { Link } from "react-router-dom";

export function Home() {

  const [links, setLinks] = useState<LinkProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps>();

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef)
      .then((snapshot) => {
        const lista = [] as LinkProps[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color
          })
        })

        setLinks(lista);
      })

    }

    loadLinks();
  }, []);

  useEffect(() => {

    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");
    getDoc(docRef)
    .then((snapshot) => {

      if(snapshot.data() != undefined) {
        setSocialLinks({
          github: snapshot.data()?.github,
          linkedin: snapshot.data()?.linkedin,
          instagram: snapshot.data()?.instagram
        })
      }
    })

    }
    loadSocialLinks();
  }, []);
  

  return(
    <>
      <div className="flex flex-col w-full p-4 items-center justify-center">
        <h1 className="md:text-4xl text-3xl text-amber-50 font-bold mt-20">joe.nog - Developer</h1>
        <span className="text-gray-50 mb-5 mt-3">Veja meus links</span>

        <main className="flex flex-col w-11/12 max-w-xl">
          
          {links.map((item) => (
            <section key={item.id} style={{ background: item.bg}} className="bg-amber-50 w-full mb-4 py-2 rounded-lg text-center transition-transform hover:scale-105">
            <a href={item.url} target="_blank">
              <p style={{ color: item.color }} className="text-base md:text-lg">{item.name}</p>
            </a>
          </section>
          ))}

          {socialLinks && Object.keys(socialLinks).length > 0 && (
            <footer className="flex justify-center gap-3 my-4">
              <span className="bg-amber-50 rounded-lg p-1">
                <Social url={socialLinks?.github}>
                  <FaGithub size={35} color="grey"/>
                </Social>
              </span>

              <span className="bg-amber-50 rounded-lg p-1">
                <Social url={socialLinks?.linkedin}>
                  <FaLinkedin size={35} color="blue"/>
                </Social>
              </span>

              <span className="bg-amber-50 rounded-lg p-1">
                <Social url={socialLinks?.instagram}>
                  <FaInstagram size={35} color="#9010ff"/>
                </Social>
              </span>

              <span className="text-amber-50 self-end">
                <Link to={'/admin'}> {'>'} </Link>
              </span>
          </footer>
          )}
          
        </main>
      </div>
    </>
  )
}
