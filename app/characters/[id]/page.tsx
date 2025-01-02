import v1 from "../../api/v1";
import { Card, Avatar, Tag } from "antd";

const CharacterDetail = async ({ params }) => {
  const { id } = await params;
  let data = {};
  try {
    const response = await v1.getCharacterById(id);
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
        <Avatar src={data.image} size={64} className="mx-auto mb-4" />

        <div className="text-2xl font-semibold text-center antialiased line-clamp-1">
          {data.name}
        </div>

        <div className="mb-2">
          <Tag color={data.status === "Alive" ? "green" : "red"}>
            {data.status}
          </Tag>
        </div>

        <div>
          <strong>Species: </strong>
          {data.species}
        </div>
        <div>
          <strong>Gender: </strong>
          {data.gender}
        </div>
        <div>
          <strong>Origin: </strong>
          <a href={data.origin.url} target="_blank" rel="noopener noreferrer">
            {data.origin.name}
          </a>
        </div>
        <div>
          <strong>Location: </strong>
          <a href={data.location.url} target="_blank" rel="noopener noreferrer">
            {data.location.name}
          </a>
        </div>

        <div className="mt-4">
          <strong>Episodes:</strong>
          <ul>
            {data.episode.map((episodeUrl, index) => (
              <li key={index}>
                <a href={episodeUrl} target="_blank" rel="noopener noreferrer">
                  Episode {index + 1}
                </a>
              </li>
            ))}
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

export default CharacterDetail;
