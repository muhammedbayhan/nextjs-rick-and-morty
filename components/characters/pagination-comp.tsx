"use client";
import { Pagination } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const PaginationComp = ({ currentPage, info }) => {
  const router = useRouter();

  const handlePaginationChange = (page) => {
    router.push(`/characters?page=${page}`);
  };

  return (
    <div>
      <Pagination
        current={currentPage}
        total={info.count}
        pageSize={20}
        showSizeChanger={false}
        onChange={handlePaginationChange}
      />
    </div>
  );
};

export default PaginationComp;
