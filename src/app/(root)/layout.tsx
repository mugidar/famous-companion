import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default layout;
