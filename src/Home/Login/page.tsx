import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import Button from "./components/Button.tsx";

const Login = () => {
    type ButtonContents = {
        id: number;
        icon?: JSX.Element;
        text: string;
    };

    const buttonContents: ButtonContents[] = [
        { id: 1, icon: <FcGoogle />, text: "Continue with Google" },
        { id: 2, icon: <SiFacebook />, text: "Continue with Facebook" },
        { id: 3, icon: <FaApple />, text: "Continue with Apple" },
        { id: 3, text: "Continue with phone number" },
    ];

    return (
        <div className="h-fit bg-gradient-to-b from-stone-700 to-stone-950 flex items-center justify-center">
            <div className="p-10 flex flex-col items-center justify-center h-fit w-1/2 bg-gradient-to-b from-stone-950 to-stone-800 rounded-xl">
                <div>
                    <FaSpotify className="text-6xl text-white" />
                </div>
                <h1 className="text-white text-3xl font-bold">Log in to Spotify</h1>

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


                        <button className="mt-3 px-2 py-[10px] rounded-full border-transparent text-base font-semibold w-[324px] bg-spotifyGreen hover:bg-spotifyGreenHover hover:scale-[1.03]" type="submit">Log In</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;
