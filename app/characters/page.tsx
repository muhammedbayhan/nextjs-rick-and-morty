import React, { useState } from "react";
import v1 from "../api/v1";
import { Card, Pagination } from "antd";
import Image from "next/image";
import { statusToImage } from "@/utils/statusToImage";

const page = async () => {
  let data = [];
  let info = {};
  try {
    const response = await v1.getAllCharacters(1);
    data = response.results;
    info = response.info;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 mx-auto max-w-screen-xl">
        {data.map((item) => (
          <Card
            key={item.id}
            hoverable
            cover={
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
              />
            }
            className="w-full max-w-xs mx-auto"
          >
            <div className="text-2xl font-semibold text-center antialiased line-clamp-1">
              {item.name}
            </div>
            <div> {statusToImage(item.status)} </div>
            <div> {statusToImage(item.gender)} </div>
            <div>{item.species}</div>
          </Card>
        ))}
      </div>
      <div className="my-10 flex items-center justify-center">
        <Pagination
          defaultCurrent={1}
          total={info.pages * 20}
          pageSize={20}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default page;
