
import { useState, useEffect } from "react";

type ResizableDividerProps = {
  onResize: (newWidth: number) => void;
};

const ResizableDivider: React.FC<ResizableDividerProps> = ({ onResize }) => {
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      onResize(e.clientX); // Pass the new width to the parent component
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="flex items-center justify-center w-[10px] cursor-grab" onMouseDown={handleMouseDown}>
      <div  className=" bg-transparent hover:bg-white w-[1px] h-[90%]"></div>
    </div>

  );
};

export default ResizableDivider;





