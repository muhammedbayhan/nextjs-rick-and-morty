"use client";
import Search from "antd/es/input/Search";
import { useRouter } from "next/navigation";

const SearchComp = ({ routePath }) => {
  const router = useRouter();

  const onChange = (e) => {
    const newInput = e.target.value;

    if (newInput === "") {
      router.push(`${routePath}`);
    } else {
      router.push(`${routePath}?name=${newInput}`);
    }
  };

  return (
    <Search
      placeholder="input search text"
      allowClear
      onChange={onChange}
      className="!w-full"
      style={{ width: 200 }}
    />
  );
};

export default SearchComp;
