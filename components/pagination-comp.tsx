"use client";
import { Pagination } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const PaginationComp = ({ currentPage, info, routePath }) => {
  const router = useRouter();

  const handlePaginationChange = (page) => {
    router.push(`${routePath}${page}&name=${localStorage.getItem("search")}`);
  };

  return (
    <div>
      <Pagination
        hideOnSinglePage
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
