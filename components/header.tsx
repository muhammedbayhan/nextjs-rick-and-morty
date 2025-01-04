"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const getLinkClass = (linkPath: string) => {
    return pathname === linkPath ? "text-green-500 font-bold" : "text-gray-700";
  };

  return (
    <div className="space-x-2 p-5 text-base ">
      <Link href="/" className={getLinkClass("/")}>
        Home
      </Link>
      <Link href="/characters" className={getLinkClass("/characters")}>
        Characters
      </Link>
      <Link href="/locations" className={getLinkClass("/locations")}>
        Locations
      </Link>
      <Link href="/episodes" className={getLinkClass("/episodes")}>
        Episodes
      </Link>
    </div>
  );
};

export default Header;
