type ButtonProps = {
    icon?: JSX.Element;
    text: string;
}

const Button = ({ icon, text }: ButtonProps) => {
    return (
        <button className="px-10 py-2 border-customGray border rounded-full flex items-center gap-5 text-white hover:border-white">
            <span className="text-2xl">{icon}</span>
            <span className="text-lg font-semibold">{text}</span>
        </button>
    );
};

export default Button;
