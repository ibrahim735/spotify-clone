
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { GrApple } from "react-icons/gr";
import LoginForm from "./components/loginForm.tsx";
import SocialLogin from "./components/SocialLogin.tsx"


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

const Login = () => {
    return (
        <div className="pt-8 h-fit bg-gradient-to-b from-[#2b2b2b] to-[#000000] flex items-center justify-center flex-col">
            <div className="p-10 flex flex-col items-center justify-center h-fit w-[55%] bg-gradient-to-b from-[#121212] to-[hsl(0,0%,7%)] rounded-xl">

                <SocialLogin />

                <hr className=" my-8 w-4/5 border-[#302f2f]" />

                <LoginForm />

            </div>

            <footer className="mt-8 bg-[#121212] w-full p-8">
                <p className="text-center text-[#b3b3b3] font-normal text-xs">This site is protected by reCAPTCHA and the Google <a className="underline" href="https://policies.google.com/privacy">Privacy Policy</a> and <a className="underline" href="https://policies.google.com/terms">Terms of Service</a> apply</p>
            </footer>
        </div>
    );
};

export default Login;
