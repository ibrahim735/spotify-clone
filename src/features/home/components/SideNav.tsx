
const Sidebar = ({ width }: { width: number }) => {
  return (
    <div
      className="bg-[#121212] text-white p-4 h-[506px] rounded-md"
      style={{ width: `${width}px` }}
    >
      <h2 className="text-lg font-bold">Sidebar</h2>
      {/* Sidebar content goes here */}
    </div>
  );
};

export default Sidebar;

