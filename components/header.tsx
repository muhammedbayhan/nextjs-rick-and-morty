import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="space-x-2">
      <Link href="/">Home</Link>
      <Link href="/characters">Characters</Link>
      <Link href="/locations">Locations</Link>
      <Link href="/episodes">Episodes</Link>
    </div>
  );
};

export default Header;
