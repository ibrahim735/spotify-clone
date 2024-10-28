import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import Button from "../../../common/components/Button";
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

const socialLogi = () => {
    return (
        <div className="w-[324px] flex flex-col items-center justify-center ">
            <Link className="cursor-default" to="/">
                <FaSpotify className="text-4xl text-white" />
            </Link>
            <h1 className="mt-2 text-white text-3xl font-bold">Log in to Spotify</h1>

            <div className="mt-8 flex flex-col gap-2 w-full">
                {buttonContents.map((data) => (
                    <Button key={data.id} icon={data.icon} text={data.text} />
                ))}
            </div>
        </div>
    )
}

export default socialLogi