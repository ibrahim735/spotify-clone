type Button2Props = {
  text: string,
  slim?: boolean
}
const Button2 = ({text, slim= false}: Button2Props) => {
  return (
    <button className={`${
        slim? 
        ' text-[#000000] bg-white border-transparent rounded-full font-bold text-sm py-[6px] px-4 '
        : ' text-[#000000] bg-white border-transparent rounded-full font-bold py-3 px-8'
    }`}>
        {text}
    </button>
  )
}

export default Button2