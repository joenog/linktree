import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";

export default function Header() {

  async function handleLogout() {
    await signOut(auth);
  }

  return(
    <header className="w-full max-w-2xl mt-4 ">
      <nav className="flex bg-amber-50 justify-between mx-2 gap-4 p-2 px-3 rounded-lg">
        <div className="flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/admin"}>Links</Link>
          <Link to={"/admin/social"}>Redes</Link>
        </div>

        <button onClick={handleLogout}> <BiLogOut /> </button>
      </nav>
    </header>
  )
}