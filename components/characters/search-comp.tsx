"use client";
import Search from "antd/es/input/Search";
import { useRouter } from "next/navigation";

const SearchComp = () => {
  const router = useRouter();

  const onChange = (e) => {
    const newInput = e.target.value;

    if (newInput === "") {
      router.push("/characters");
    } else {
      router.push(`/characters?name=${newInput}`);
    }
  };

  return (
    <Search
      placeholder="input search text"
      allowClear
      onChange={onChange}
      style={{ width: 200 }}
    />
  );
};

export default SearchComp;
