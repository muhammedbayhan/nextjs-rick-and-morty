import Link from "next/link";
import v1 from "../../api/v1";
import { Card, Avatar, Tag } from "antd";

const EpisodeDetail = async ({ params }) => {
  const { id } = await params;
  let data = {};
  try {
    const response = await v1.getEpisodeById(id); // Değiştirilen fonksiyon
    if (response.status === 200) {
      const json = await response.json();
      data = json;
      console.log(data);
    } else {
      console.log("Veri çekme hatası:", response);
    }
  } catch (error) {
    console.log("Veri çekme hatası:", error);
  }

  return (
    <div>
      <Card hoverable className="text-center">
        <div className="text-2xl font-semibold text-center antialiased line-clamp-1">
          {data.name}
        </div>

        <div className="mb-2 text-gray-600">
          <strong>Air Date: </strong>
          {data.air_date}
        </div>

        <div className="mb-2">
          <strong>Episode Code: </strong>
          <Tag color="purple">{data.episode}</Tag>
        </div>

        <div className="mb-2">
          <strong>Characters: </strong>
          <ul>
            {data.characters && data.characters.length > 0 ? (
              data.characters.map((characterUrl, index) => (
                <li key={index}>
                  <Link href={`/characters/${characterUrl.split("/").pop()}`}>
                    Character {characterUrl.split("/").pop()}
                  </Link>
                </li>
              ))
            ) : (
              <p>No characters available.</p>
            )}
          </ul>
        </div>

        <div className="mt-2 text-sm text-gray-500">
          <strong>Created on: </strong>
          {new Date(data.created).toLocaleDateString()}
        </div>
      </Card>
    </div>
  );
};

export default EpisodeDetail;
