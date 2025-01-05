import UserCard from "@/components/characters/user-card";
import v1 from "../api/v1";
import PaginationComp from "@/components/pagination-comp";
import SearchComp from "@/components/search-comp";

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
    <div className="min-h-screen text-white">
      <div className="my-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-6">
          Explore Characters
        </h1>
        <div className="w-4/5">
          <SearchComp routePath={"/locations"} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-8 mx-auto max-w-screen-xl">
        {data.map((item) => (
          <UserCard key={item.id} item={item} />
        ))}
      </div>

      <div className="my-10 flex items-center justify-center">
        <PaginationComp
          currentPage={currentPage}
          info={info}
          routePath={"/characters?page="}
        />
      </div>
    </div>
  );
};

export default CharactersPage;
