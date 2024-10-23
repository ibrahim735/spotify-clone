import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom"
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="p-2">
      <div className="text-white text-[33px] ">
        <Link to="/"><FaSpotify /></Link>
      </div>

      <div>
        <div>
          <MdHomeFilled />
        </div>

        <div>
          <form action="">
            <div>
              <IoSearch />
              <input type="search" name="" id="" />
              <div className="">
                <span></span>

              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Navbar