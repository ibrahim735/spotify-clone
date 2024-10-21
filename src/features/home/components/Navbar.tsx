import { FaSpotify } from "react-icons/fa";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="p-2 flex items-center justify-between">
      <FaSpotify className="text-white text-4xl cursor-pointer" />
      <div className="bg-white w-96 h-10">
        my home and search
      </div>

      <div className="flex gap-5">
        <Link className="text-white" to="/login" >Log in</Link>
        <Link className=" text-white" to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar