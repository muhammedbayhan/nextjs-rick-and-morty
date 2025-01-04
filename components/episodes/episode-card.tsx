"use client";
import React from "react";
import { Card } from "antd";

import Link from "next/link";
const EpisodeCard = ({ item }) => {
  return (
    <Link href={`/episodes/${item.id}`}>
      <Card key={item.id} hoverable className="w-full max-w-xs mx-auto">
        <div className="text-2xl font-semibold text-center antialiased line-clamp-1">
          {item.name}
        </div>
        <div> {item.air_date}</div>
        <div> {item.episode}</div>
      </Card>
    </Link>
  );
};

export default EpisodeCard;
