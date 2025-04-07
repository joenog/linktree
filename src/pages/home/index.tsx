import { Social } from "../../components/Social"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

export function Home() {
  return(
    <>
      <div className="flex flex-col w-full p-4 items-center justify-center">
        <h1 className="md:text-4xl text-3xl text-amber-50 font-bold mt-20">joe.nog - Developer</h1>
        <span className="text-gray-50 mb-5 mt-3">Veja meus links</span>

        <main className="flex flex-col w-11/12 max-w-xl">
          <section className="bg-amber-50 w-full mb-4 py-2 rounded-lg text-center transition-transform hover:scale-105">
            <a href="">
              <p className="text-base md:text-lg">Canal do Youtube</p>
            </a>
          </section>

          <footer className="flex justify-center gap-3 my-4">
            <span className="bg-amber-50 rounded-lg p-1">
              <Social url={'https://facebook.com'}>
                <FaFacebook size={35} color="blue"/>
              </Social>
            </span>

            <span className="bg-amber-50 rounded-lg p-1">
              <Social url={'https://youtube.com'}>
                <FaYoutube size={35} color="red"/>
              </Social>
            </span>

            <span className="bg-amber-50 rounded-lg p-1">
              <Social url={'https://instagram.com'}>
                <FaInstagram size={35} color="purple"/>
              </Social>
            </span>
          </footer>
        </main>
      </div>
    </>
  )
}