import Link from "next/link";
import React from "react";
import DarkModeSwitcher from "./dark-mode-switcher";

const Header = () => {
  return (
    <div className="space-x-2  dark:bg-gray-800">
      <Link href="/">Home</Link>
      <Link href="/characters">Characters</Link>
      <Link href="/locations">Locations</Link>
      <Link href="/episodes">Episodes</Link>
      <DarkModeSwitcher />
    </div>
  );
};

export default Header;
