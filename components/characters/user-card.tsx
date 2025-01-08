"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { statusToImage } from "@/utils/statusToImage";

const UserCard = ({ item }) => {
  return (
    <Link
      href={`/characters/${item.id}`}
      className="group block relative w-full max-w-xs mx-auto"
    >
      <div className="relative w-full h-72 overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority
          className="group object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4 text-white rounded-lg">
        <div className="flex items-center">
          <div className="text-2xl group-hover:scale-105 group-hover:ml-5  duration-300 font-semibold  antialiased line-clamp-1 w-full items-start flex">
            {item.name}
          </div>
          <div className="flex absolute right-4 top-5 bg-white bg-opacity-50 p-1 group-hover:animate-pulse group-hover:bg-opacity-95 rounded-full space-x-2">
            <Image
              width={24}
              height={24}
              src={`/${statusToImage(item.status)}`}
              alt={item.status}
            />
            <Image
              width={24}
              height={24}
              src={`/${statusToImage(item.gender)}`}
              alt={item.gender}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
