"use client";

import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { buttonVariants } from "./ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <MobileNavbar />

      <div className="w-full flex-1">
        <span className="sr-only">Toggle user menu</span>
      </div>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Navbar;
