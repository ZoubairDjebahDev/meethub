"use client";

import DropDownMenu from "./DropdownMenu";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <MobileNavbar />

      <div className="w-full flex-1">
        <span className="sr-only">Toggle user menu</span>
      </div>

      <DropDownMenu />
    </header>
  );
};

export default Navbar;
