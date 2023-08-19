"use client";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <header className="h-[70px] px-5 bg-gray-400 w-full flex  items-center">
     
      <span className="flex gap-3 justify-self-end">
        <UserButton afterSignOutUrl="/" />
        <SignOutButton />
      </span>
    </header>
  );
};

export default Navbar;
