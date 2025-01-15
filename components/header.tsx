"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeSwitcher from "./dark-mode-switcher";

const Header = () => {
  const pathname = usePathname();

  const getLinkClass = (linkPath: string) => {
    return pathname === linkPath
      ? "text-green-400 font-bold underline underline-offset-4"
      : "text-gray-300 hover:text-white transition-all duration-300";
  };

  return (
    <div className="flex justify-between items-center p-5 px-10 bg-gradient-to-r from-slate-800 via-slate-600 to-green-700  dark:from-green-700 dark:via-slate-600 dark:to-slate-800">
      <div className="text-lg  md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        <Link href="/">Rick and Morty</Link>
      </div>

      <div className="flex space-x-8 text-lg pr-32">
        <Link href="/" className={`${getLinkClass("/")}`}>
          Home
        </Link>
        <Link href="/characters" className={`${getLinkClass("/characters")}`}>
          Characters
        </Link>
        <Link href="/locations" className={`${getLinkClass("/locations")}`}>
          Locations
        </Link>
        <Link href="/episodes" className={`${getLinkClass("/episodes")}`}>
          Episodes
        </Link>
      </div>

      <div>
        <DarkModeSwitcher />
      </div>
    </div>
  );
};

export default Header;
