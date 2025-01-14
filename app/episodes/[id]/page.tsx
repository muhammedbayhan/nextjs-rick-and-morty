import Link from "next/link";
import v1 from "../../api/v1";
import { Card, Avatar, Tag } from "antd";

const EpisodeDetail = async ({ params }) => {
  const { id } = await params;
  let data = {};
  let characters = [];

  try {
    const response = await v1.getEpisodeById(id); // Fetch episode details
    if (response.status === 200) {
      const json = await response.json();
      data = json;

      // Extract character IDs from the episode
      const characterIds = data.characters.map((characterUrl) =>
        characterUrl.split("/").pop()
      );

      // Fetch multiple characters at once if any character IDs exist
      if (characterIds.length > 0) {
        const charactersResponse = await v1.getCharactersByIds(
          characterIds.join(",")
        );
        if (charactersResponse.ok) {
          characters = await charactersResponse.json();
        }
      }
      console.log(data, characters); // Debugging data and characters
    } else {
      console.log("Data fetch error:", response);
    }
  } catch (error) {
    console.log("Data fetch error:", error);
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
            {characters.length > 0 ? (
              characters.map((character, index) => (
                <li key={index}>
                  <Link href={`/characters/${character.id}`}>
                    {character.name}
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
