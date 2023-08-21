"use client";
import React from "react";
import { Home, Plus, Settings } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { usePathname, useRouter } from "next/navigation";
const routes = [
  {
    icon: Home,
    href: "/",
    label: "Home",
    pro: false
  },
  {
    icon: Plus,
    href: "/companion/new",
    label: "Create",
    pro: true
  },
  {
    icon: Settings,
    href: "/settings",
    label: "Settings",
    pro: false
  }
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter()

  const onNavigate = (url:string) => {
    router.push(url)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-70px)] flex-0  border-r border-primary p-3 text-primary bg-secondary space-y-4 ">
      {routes.map((route) => (
        <div
          className={cn(
            " flex flex-col items-center text-muted-foreground text-xs group  w-full p-3 font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg",
            pathname === route.href && "text-primary bg-primary/10 "
          )}
          onClick={() => onNavigate(route.href)}
          key={route.href}
        >
          <route.icon />
          {route.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
