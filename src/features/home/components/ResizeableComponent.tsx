// ResizableLayout.tsx
import React, { useState } from "react";
import SideNav from "./SideNav";       // Import SideNav component
import MainContent from "./MainContent"; // Import MainContent component

const ResizableComponent: React.FC = () => {
  // Initial width for SideNav
  const [sideNavWidth, setSideNavWidth] = useState<number>(280); // Start at minimum width

  // Mouse down on divider
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    // Capture initial mouse position
    const startX = e.clientX;
    const initialWidth = sideNavWidth;

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate new width
      const newWidth = Math.min(
        420, // max width
        Math.max(280, initialWidth + (e.clientX - startX)) // min width
      );
      setSideNavWidth(newWidth);
    };

    // Cleanup mouse events
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Attach mousemove and mouseup
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex h-[506px] my-2">
      {/* SideNav with dynamic width */}
      <SideNav width={sideNavWidth} />

      {/* Divider */}
      <div
        onMouseDown={handleMouseDown}
        className=" w-2 bg-transparent cursor-grab h-[95%] m-auto hover:bg-[] "
      ></div>

      {/* Main Content */}
      <MainContent />
    </div>
  );
};

export default ResizableComponent;


