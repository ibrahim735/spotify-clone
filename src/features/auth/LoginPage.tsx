import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import Button from "../../common/components/Button.tsx";
import { Link } from "react-router-dom";


export type ButtonContents = {
    id: number;
    icon?: JSX.Element;
    text: string;
};

export const buttonContents: ButtonContents[] = [
    { id: 1, icon: <FcGoogle />, text: "Continue with Google" },
    { id: 2, icon: <SiFacebook />, text: "Continue with Facebook" },
    { id: 3, icon: <FaApple />, text: "Continue with Apple" },
    { id: 4, text: "Continue with phone number" },
];

const Login = () => {
    return (
        <div className="pt-8 h-fit bg-gradient-to-b from-stone-800 to-stone-950 flex items-center justify-center flex-col">
            <div className="p-10 flex flex-col items-center justify-center h-fit w-[54.5%] bg-gradient-to-b from-stone-950 to-stone-900 rounded-xl">
                <div>
                    <FaSpotify className="text-4xl text-white" />
                </div>
                <h1 className="mt-2 text-white text-3xl font-bold">Log in to Spotify</h1>

                <div className="mt-8 flex flex-col gap-2">
                    {buttonContents.map((data) => (
                        <Button key={data.id} icon={data.icon} text={data.text} />
                    ))}
                </div>
                <hr className="my-10 w-full border-customGray" />

                <div>
                    <form className="flex flex-col gap-3" action="submit">
                        <div className="flex flex-col gap-1">
                            <label className="text-white text-base font-semibold" htmlFor="">Email or username</label>
                            <input className="px-2 py-[10px] rounded-md w-[324px] outline outline-offset-2 outline-1 bg-amber-100 border-2 " type="email" name="" id="" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-white text-base font-semibold " htmlFor="">Password</label>
                            <input className="px-2 py-[10px] rounded-md w-[324px] outline outline-offset-2 outline-1 bg-amber-100 border-2" type="password" name="" id="" />
                        </div>


                        <button className="mt-3 px-2 py-[12px] rounded-full border-transparent text-base font-semibold w-[324px] bg-spotifyGreen hover:bg-spotifyGreenHover hover:scale-[1.03]" type="submit">Log In</button>
                    </form>
                </div>
                <div className="text-white font-medium text-base p-8">
                    <Link className="underline" to="/forgotpassword"><p>Forgot your password?</p></Link>
                </div>
                <div className="text-white font-medium text-base pb-8">
                    <h2 className="flex gap-2">
                        <span className="text-stone-400">Don't have an account?</span>
                        <Link className="underline text-white" to="/signup"><span>Sign up for Spotify</span></Link>
                    </h2>
                </div>
            </div>

            <footer className="mt-8 bg-stone-900 w-full p-8">
                <p className="text-center text-stone-300 font-normal text-xs">This site is protected by reCAPTCHA and the Google <a className="underline" href="https://policies.google.com/privacy">Privacy Policy</a> and <a className="underline" href="https://policies.google.com/terms">Terms of Service</a> apply</p>
            </footer>
        </div>
    );
};

export default Login;
