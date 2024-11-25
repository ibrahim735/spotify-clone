
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { GrApple } from "react-icons/gr";
import SocialLogin from "./components/SocialLogin.tsx"
import FormLogin from "./components/FormLogin.tsx";



export type ButtonContents = {
    id: number;
    icon?: JSX.Element;
    text: string;
};

export const buttonContents: ButtonContents[] = [
    { id: 1, icon: <FcGoogle />, text: "Continue with Google" },
    { id: 2, icon: <SiFacebook />, text: "Continue with Facebook" },
    { id: 3, icon: <GrApple />, text: "Continue with Apple" },
    { id: 4, text: "Continue with phone number" },
];

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=124ef34fb5224fdf868a397490a31774&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";


const Login = () => {
    return (
        <div className="pt-8 h-fit bg-gradient-to-b from-[#2b2b2b] to-[#000000] flex items-center justify-center flex-col">
            <div className="p-10 flex flex-col items-center justify-center h-fit w-[55%] bg-gradient-to-b from-[#121212] to-[hsl(0,0%,7%)] rounded-xl">

                <SocialLogin />

                <a href={AUTH_URL}>
                    <button className="mt-4 w-[323px] px-7 py-3 border rounded-full bg-[#1ed760] text-[#000000] hover:scale-[1.03] hover:brightness-125 flex items-center justify-center border-transparent font-bold active:scale-90 transition-all">
                        Log in with Spotify
                    </button>
                </a>



                <hr className=" my-8 w-4/5 border-[#302f2f]" />

                <FormLogin />

            </div>

            <footer className="mt-8 bg-[#121212] w-full p-8">
                <p className="text-center text-[#b3b3b3] font-normal text-xs">This site is protected by reCAPTCHA and the Google <a className="underline" href="https://policies.google.com/privacy">Privacy Policy</a> and <a className="underline" href="https://policies.google.com/terms">Terms of Service</a> apply</p>
            </footer>
        </div>
    );
};

export default Login;
