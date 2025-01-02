import React from "react";
import v1 from "../api/v1";
import SearchComp from "@/components/characters/search-comp";
import PaginationComp from "@/components/characters/pagination-comp";
import LocationCard from "@/components/locations/location-card";
const page = async ({ searchParams }) => {
  const { page, name } = searchParams;
  const currentPage = page ? parseInt(page) : 1;

  let data = [];
  let info = {};
  try {
    const response = await v1.getAllLocations(currentPage, name || "");
    if (response.status === 200) {
      const json = await response.json();
      data = json.results;
      info = json.info;
    } else {
      console.log("Veri çekme hatası:", response);
    }
  } catch (error) {
    console.log("Veri çekme hatası:", error);
  }

  return (
    <div>
      <div className="my-10 flex flex-col items-center justify-center">
        <SearchComp />
        <PaginationComp currentPage={currentPage} info={info} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 mx-auto max-w-screen-xl">
        {data.map((item) => (
          <LocationCard key={item.id} item={item} />
        ))}
      </div>
      <div className="my-10 flex items-center justify-center">
        <PaginationComp currentPage={currentPage} info={info} />
      </div>
    </div>
  );
};

export default page;
