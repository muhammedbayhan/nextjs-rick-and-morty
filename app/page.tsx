import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Rick and Morty
      </h1>
      <h2 className="text-center text-lg  max-w-2xl ">
        Explore the Rick and Morty universe! This site is a comprehensive
        resource for the beloved characters, unforgettable locations, and all
        episodes of Rick and Morty. Dive deep into the evolving stories and
        immersive universe, and learn more about your favorite characters and
        planets!&nbsp;
        <p className="animate-pulse bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
          Click on the portal and dive into the universe of Rick and Morty!
        </p>
      </h2>
      <div className="flex justify-center items-center">
        <Link href="/characters">
          <Image
            src="/portal.gif"
            alt="Rick and Morty"
            width={350}
            height={350}
            className="rounded-xl  transition-transform duration-500 hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
}
