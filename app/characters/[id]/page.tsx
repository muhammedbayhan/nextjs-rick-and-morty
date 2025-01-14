import Link from "next/link";
import v1 from "../../api/v1";
import { Card, Avatar, Tag, Divider } from "antd";

export async function generateMetadata({ params }) {
  const { id } = await params;

  let data = {};
  let episodes = [];

  try {
    const response = await v1.getCharacterById(id);
    if (response.status === 200) {
      const json = await response.json();
      data = json;

      const episodeIds = data.episode.map((episodeUrl) => {
        return episodeUrl.split("/").pop();
      });

      if (episodeIds.length > 0) {
        const episodesResponse = await v1.getEpisodeById(episodeIds.join(","));
        if (episodesResponse.ok) {
          const episodesData = await episodesResponse.json();

          episodes = Array.isArray(episodesData)
            ? episodesData
            : [episodesData];
        }
      }

      console.log(data, episodes);
    } else {
      console.log("Veri çekme hatası:", response);
    }
  } catch (error) {
    console.log("Veri çekme hatası:", error);
  }

  return {
    title: data.name,
    description: episodes.map((episode) => episode.name).join(", "),
    keywords: episodes.map((episode) => episode.name).join(", "),
  };
}

const CharacterDetail = async ({ params }) => {
  const { id } = await params;
  let data = {};
  let episodes = [];

  try {
    const response = await v1.getCharacterById(id);
    if (response.status === 200) {
      const json = await response.json();
      data = json;

      const episodeIds = data.episode.map((episodeUrl) => {
        return episodeUrl.split("/").pop();
      });

      if (episodeIds.length > 0) {
        const episodesResponse = await v1.getEpisodeById(episodeIds.join(","));
        if (episodesResponse.ok) {
          const episodesData = await episodesResponse.json();

          episodes = Array.isArray(episodesData)
            ? episodesData
            : [episodesData];
        }
      }

      console.log(data, episodes);
    } else {
      console.log("Veri çekme hatası:", response);
    }
  } catch (error) {
    console.log("Veri çekme hatası:", error);
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 min-h-screen ">
      {/* Character Info */}
      <div className="flex-2">
        <Card
          bordered={false}
          hoverable
          className="max-w-md w-full bg-gradient-to-tr from-slate-800 via-slate-600 to-green-700 text-white shadow-xl rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="mb-6">
            <Tag
              bordered={false}
              color={data.status === "Alive" ? "green" : "red"}
              className="text-lg font-medium"
            >
              {data.status}
            </Tag>
          </div>
          <Avatar
            className="flex items-center justify-center mb-4 mx-auto"
            src={data.image}
            size={128}
          />
          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2">{data.name}</div>
            <div className="text-lg text-gray-300 mb-4">
              {data.species} - {data.gender}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold text-sm">Origin:</span>
              <Link
                href={`/locations/${data.origin.url.split("/").pop()}`}
                className="text-blue-300 hover:underline"
              >
                {data.origin.name}
              </Link>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-sm">Location:</span>
              <Link
                href={`/locations/${data.location.url.split("/").pop()}`}
                className="text-blue-300 hover:underline"
              >
                {data.location.name}
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Episodes List */}
      <div className="flex-1 h-full text-white">
        <Card
          bordered={false}
          className="shadow-xl rounded-lg p-6 bg-slate-700 hover:shadow-2xl transition-all duration-300"
        >
          <div className="text-3xl font-bold text-white mb-6">Episodes</div>
          <Divider className="border-gray-600 mb-6" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {episodes.map((episode, index) => (
              <li
                key={index}
                className="group bg-slate-600 rounded-lg p-4 flex justify-between space-x-3 hover:bg-slate-500 transition-all duration-200"
              >
                <div className="flex flex-col  text-center w-full space-y-2">
                  <Tag
                    bordered={false}
                    className="bg-slate-500 text-center text-sm font-medium text-white group-hover:bg-green-400 transition-all"
                  >
                    {episode.episode}
                  </Tag>
                  <Link
                    href={`/episodes/${episode.id}`}
                    className="text-lg font-semibold text-white group-hover:text-green-400 group-hover:underline transition-all duration-300"
                  >
                    {episode.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default CharacterDetail;
