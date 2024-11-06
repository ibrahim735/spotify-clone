type Button2Props ={
    text: string,
    slim?: boolean
}
const Button2 = ({text, slim= false}: Button2Props) => {
  return (
    <button className={`${
        slim? 
        'font-bold text-[#000000] bg-white px-8 py-2 rounded-full' // Slim button styles
        : 'font-bold text-[#000000] bg-white px-8 py-3 rounded-full' // Regular button styles
    } hover:scale-[1.03] hover:bg-[#b3b3b3]`}>
        {text}
    </button>
  )
}

export default Button2