"use client";
import React from "react";
import { Card } from "antd";

import Link from "next/link";
const LocationCard = ({ item }) => {
  return (
    <Link href={`/locations/${item.id}`}>
      <Card
        key={item.id}
        className="w-full max-w-xs mx-auto hover:scale-105 duration-300 bg-gradient-to-r from-slate-800 via-slate-600 to-green-800 text-white border-slate-600"
      >
        <div className="text-2xl font-semibold text-center antialiased line-clamp-1">
          {item.name}
        </div>
        <div> {item.id}</div>
        <div> {item.dimension}</div>
      </Card>
    </Link>
  );
};

export default LocationCard;
