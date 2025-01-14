import Link from "next/link";
import v1 from "../../api/v1";
import { Card, Avatar, Tag, Divider } from "antd";

const EpisodeDetail = async ({ params }) => {
  const { id } = await params;
  let data = {};
  let characters = [];

  try {
    const response = await v1.getEpisodeById(id);
    if (response.status === 200) {
      const json = await response.json();
      data = json;

      const characterIds = data.characters.map((characterUrl) =>
        characterUrl.split("/").pop()
      );

      if (characterIds.length > 0) {
        const charactersResponse = await v1.getCharactersByIds(
          characterIds.join(",")
        );
        if (charactersResponse.ok) {
          characters = await charactersResponse.json();
        }
      }
      console.log(data, characters);
    } else {
      console.log("Data fetch error:", response);
    }
  } catch (error) {
    console.log("Data fetch error:", error);
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 min-h-screen">
      <div className="flex-2">
        <Card
          bordered={false}
          hoverable
          className="text-center bg-gradient-to-tr from-slate-800 via-slate-600 to-green-700 text-white shadow-xl rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="mb-4">
            <Tag color="purple">{data.episode}</Tag>
          </div>

          <div className="text-2xl font-semibold mb-4">{data.name}</div>

          <div className="mb-4 text-lg">
            <strong>Air Date: </strong>
            {data.air_date}
          </div>
        </Card>
      </div>
      <div className="flex-1 h-full text-white">
        <Card
          bordered={false}
          className="shadow-xl rounded-lg p-6 bg-slate-700 hover:shadow-2xl transition-all duration-300"
        >
          <div className="text-3xl font-bold text-white mb-6">
            The characters in this episode
          </div>
          <Divider className="border-gray-600 mb-6" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.length > 0 ? (
              characters.map((character, index) => (
                <li
                  key={index}
                  className="group bg-slate-600 rounded-lg p-4 flex items-center space-x-4 hover:bg-slate-500 transition-all duration-200"
                >
                  <Avatar src={character.image} size={64} />
                  <div className="text-white">
                    <Link
                      href={`/characters/${character.id}`}
                      className="text-lg font-semibold group-hover:text-green-400 group-hover:underline transition-all duration-300"
                    >
                      {character.name}
                    </Link>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-300">No characters available.</p>
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default EpisodeDetail;
