type Button2Props = {
  text: string,
  slim?: boolean
}
const Button2 = ({ text, slim = false }: Button2Props) => {
  return (
    <button className={`${slim ?
        'text-sm py-[6px] px-4'
        : ' py-3 px-8'
      } text-[#000000] bg-white border-transparent rounded-full font-bold hover:scale-105 hover:filter  hover:brightness-90 active:scale-90 transition-all `}>
      {text}
    </button>
  )
}

export default Button2