import UserCard from "@/components/characters/user-card";
import v1 from "../api/v1";
import PaginationComp from "@/components/characters/pagination-comp";
import SearchComp from "@/components/characters/search-comp";

const CharactersPage = async ({ searchParams }) => {
  const { page, name } = searchParams;

  const currentPage = page ? parseInt(page) : 1;

  let data = [];
  let info = {};
  try {
    const response = await v1.getAllCharacters(currentPage, name || "");
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
          <UserCard key={item.id} item={item} />
        ))}
      </div>
      <div className="my-10 flex items-center justify-center">
        <PaginationComp currentPage={currentPage} info={info} />
      </div>
    </div>
  );
};

export default CharactersPage;
