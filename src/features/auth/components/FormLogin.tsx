import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <div className="w-[324px] flex flex-col items-center">

            <form className="flex flex-col gap-3 w-full" action="submit">
                <div className="flex flex-col gap-1 ">
                    <label className="text-white text-sm font-bold" htmlFor="">Email or username</label>
                    <input className="px-2 py-[10px] rounded-md w-full outline outline-offset-2 outline-1 bg-[#fffcc8] border-2 " type="email" name="" id="" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-white text-sm font-bold " htmlFor="">Password</label>
                    <input className="px-2 py-[10px] rounded-md w-full outline outline-offset-2 outline-1 bg-[#fffcc8] border-2" type="password" name="" id="" />
                </div>

                <button className=" mt-4 w-full px-7 py-3 border rounded-full bg-[#1ed760] text-[#000000] hover:scale-[1.03] hover:brightness-125 flex items-center justify-center border-transparent font-bold">
                    Log In
                </button>
            </form>

            <div className="text-white font-medium text-base p-8">
                <Link className="underline hover:text-[#1ed760]" to="/forgotpassword"><p>Forgot your password?</p></Link>
            </div>
            <div className="text-white font-medium text-base pb-8">
                <h2 className="flex gap-2">
                    <span className="text-[#b3b3b3]">Don't have an account?</span>
                    <Link className="underline text-white hover:text-[#1ed760]" to="/signup"><span>Sign up for Spotify</span></Link>
                </h2>
            </div>
        </div>
    )
}

export default LoginForm