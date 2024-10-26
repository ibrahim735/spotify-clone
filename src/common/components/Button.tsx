type ButtonProps = {
    icon?: JSX.Element;
    text: string;
}

const Button = ({ icon, text }: ButtonProps) => {
    return (
        <button className="w-full px-7 py-2 border-customGray border rounded-full flex items-center gap-5 text-white hover:border-white">
            <span className="text-2xl">{icon}</span>
            <div className="flex items-center justify-center w-3/4"><p className="font-semibold">{text}</p></div>
        </button>
    );
};

export default Button;
