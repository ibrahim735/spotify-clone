type codeProps = {
  code: string | null; // The code snippet to be displayed
}
const MainContent: React.FC<codeProps> = (code) => {
  return ( code ?
    <div className="flex-1 bg-gradient-to-b from-[#222222] to-[#121212] rounded-md">
      
    </div> : "no code provided"
  );}

  export default MainContent;
