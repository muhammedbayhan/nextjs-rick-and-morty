"use client";
import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { statusToImage } from "@/utils/statusToImage";
import Link from "next/link";
const UserCard = ({ item }) => {
  return (
    <Link href={`/characters/${item.id}`}>
      <Card
        key={item.id}
        hoverable
        cover={
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            height={200}
            priority
          />
        }
        className="w-full max-w-xs mx-auto"
      >
        <div className="text-2xl font-semibold text-center antialiased line-clamp-1">
          {item.name}
        </div>
        <div>{statusToImage(item.status)}</div>
        <div>{statusToImage(item.gender)}</div>
        <div>{item.species}</div>
      </Card>
    </Link>
  );
};

export default UserCard;
