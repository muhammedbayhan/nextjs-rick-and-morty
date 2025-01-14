import Link from "next/link";
import v1 from "../../api/v1";
import { Card, Avatar, Tag } from "antd";

const CharacterDetail = async ({ params }) => {
  const { id } = await params;
  let data = {};
  let episodes = [];
  try {
    const response = await v1.getCharacterById(id);
    if (response.status === 200) {
      const json = await response.json();
      data = json;

      // Episode ID'lerini çıkarıyoruz
      const episodeIds = data.episode.map((episodeUrl) => {
        return episodeUrl.split("/").pop();
      });

      // Çoklu bölüm verisi alıyoruz
      if (episodeIds.length > 0) {
        const episodesResponse = await v1.getEpisodeById(episodeIds.join(","));
        if (episodesResponse.ok) {
          episodes = await episodesResponse.json();
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
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Sol taraf: Kullanıcı Bilgileri */}
      <div className="flex-1">
        <Card hoverable className="text-center p-4 shadow-lg h-full">
          <Avatar src={data.image} size={128} className="mx-auto mb-4" />
          <div className="text-3xl font-bold mb-2">{data.name}</div>
          <div className="mb-4">
            <Tag color={data.status === "Alive" ? "green" : "red"}>
              {data.status}
            </Tag>
          </div>
          <div className="text-lg">
            <strong>Species: </strong>
            {data.species}
          </div>
          <div className="text-lg">
            <strong>Gender: </strong>
            {data.gender}
          </div>
          <div className="text-lg">
            <strong>Origin: </strong>
            <Link href={`/locations/${data.origin.url.split("/").pop()}`}>
              {data.origin.name}
            </Link>
          </div>
          <div className="text-lg">
            <strong>Location: </strong>
            <Link href={`/locations/${data.location.url.split("/").pop()}`}>
              {data.location.name}
            </Link>
          </div>
        </Card>
      </div>

      {/* Sağ taraf: Bölüm Listesi */}
      <div className="flex-1">
        <Card hoverable className="p-4 shadow-lg h-full">
          <div className="text-2xl font-bold mb-4">Episodes</div>
          <ul className="grid grid-cols-3 gap-2">
            {episodes.map((episode, index) => (
              <li key={index}>
                <Link href={`/episodes/${episode.id}`}>
                  {episode.episode} - {episode.name}
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default CharacterDetail;
