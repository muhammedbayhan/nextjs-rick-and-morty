import React from "react";
import v1 from "../api/v1";
import SearchComp from "@/components/search-comp";
import PaginationComp from "@/components/pagination-comp";
import LocationCard from "@/components/locations/location-card";

const LocationsPage = async ({ searchParams }) => {
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
    <div className="min-h-screen text-white">
      <div className="my-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-6">
          Explore Locations
        </h1>
        <div className="w-4/5">
          <SearchComp routePath={"/locations"} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 mx-auto max-w-screen-xl">
        {data.map((item) => (
          <LocationCard
            key={item.id}
            item={item}
            className="transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 rounded-lg overflow-hidden bg-gray-700"
          />
        ))}
      </div>
      <div className="my-10 flex items-center justify-center">
        <PaginationComp
          currentPage={currentPage}
          info={info}
          routePath={"/locations?page="}
        />
      </div>
    </div>
  );
};

export default LocationsPage;
