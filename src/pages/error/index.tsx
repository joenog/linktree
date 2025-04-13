import { Link } from "react-router-dom"

export function ErrorPage() {
  return(
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-amber-50">
      <h1 className="text-4xl font-bold">404</h1>
      <h1 className="text-3xl">Página não encontrada...</h1>
      <button className="rounded-md bg-gray-700 my-6 px-4 py-1">
        <Link to={'/'}>Home</Link>
      </button>
    </div>
  )
}