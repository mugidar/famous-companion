"use client";
import { cn } from "@/lib/utils";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../Theme/ui/ModeToggle";
import MobileSidebar from "../MobileSidebar/MobileSidebar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"]
});

const Navbar = () => {
  return (
    <header className="h-[70px] border-b border-primary px-5 bg-primary-foreground w-full flex items-center justify-between">
      <span className="flex items-center">
        <MobileSidebar/>
        <Link
          className={cn(
            font.className,
            "hidden md:flex md:gap-2 md:border md:p-1"
          )}
          href="/"
        >
          <div>
            <h1 className="text-center font-bold">F</h1>
            <p className="font-light">Famous</p>
          </div>
          <div>
            <h1 className="text-center font-bold">C</h1>
            <p className="font-light">Companion</p>
          </div>
        </Link>
      </span>
      <span className="flex items-center gap-3 justify-self-end">
        <ModeToggle/>
        <Button variant={"premium"} size="sm" className="gap-2">
          Upgrade <Sparkles className="fill-white" />
        </Button>

        <UserButton afterSignOutUrl="/" />
        <SignOutButton />
      </span>
    </header>
  );
};

export default Navbar;
