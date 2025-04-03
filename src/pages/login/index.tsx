import { Link } from "react-router-dom";

export function Login() {
  return(
    <>
      <div className="flex w-full h-screen justify-center items-center">
        <Link to={'/'}>
          <h1 className="text-amber-50 mt-11 mb-7 font-bold text-5xl">Dev
            <span className="bg-gradient-to-r from-blue-500 to-blue-950 bg-clip-text text-transparent">Link</span>
          </h1>
        </Link>
      </div>
    </>
  )
  
}