import React from "react";
import v1 from "../api/v1";
import SearchComp from "../../components/search-comp";
import PaginationComp from "../../components/pagination-comp";
import EpisodeCard from "@/components/episodes/episode-card";

const page = async ({ searchParams }) => {
  const { page, name } = searchParams;
  const currentPage = page ? parseInt(page) : 1;

  let data = [];
  let info = {};
  try {
    const response = await v1.getAllEpisodes(currentPage, name || "");
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
        <SearchComp routePath={"/episodes"} />
        <PaginationComp
          currentPage={currentPage}
          info={info}
          routePath={"/locations?page="}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 mx-auto max-w-screen-xl">
        {data.map((item) => (
          <EpisodeCard key={item.id} item={item} />
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

export default page;
