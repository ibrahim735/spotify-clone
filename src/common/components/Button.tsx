// type ButtonProps = {
//     icon?: JSX.Element;
//     text: string;
// }

// const Button = ({ icon, text }: ButtonProps) => {
//     return (
//         <button className="w-full px-7 py-3 border-[#b3b3b3] border rounded-full text-white hover:border-white">
//             <div className="flex items-center">
//                 <span className="text-2xl">{icon}</span>
//             </div>
//             <div className="flex items-center justify-center">
//                 <p className="font-semibold">{text}</p>
//             </div>
//         </button>
//     );
// };

// export default Button;


type ButtonProps = {
    icon?: JSX.Element;
    text: string;
}

const Button = ({ icon, text }: ButtonProps) => {
    return (
        <button className="w-full px-7 py-3 border-[#7c7c7c] border rounded-full text-[#e7e7e7] hover:border-white flex items-center justify-center relative">
            {icon && (
                <span className="absolute left-8 text-xl">
                    {icon}
                </span>
            )}
            <p className="font-semibold flex-grow text-center">{text}</p>
        </button>
    );
};

export default Button;

