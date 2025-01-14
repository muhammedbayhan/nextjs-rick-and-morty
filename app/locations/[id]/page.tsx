import Link from "next/link";
import v1 from "../../api/v1";
import { Card, Tag } from "antd";

const LocationDetail = async ({ params }) => {
  const { id } = await params;
  let data = {};
  let residents = [];

  try {
    const response = await v1.getLocationById(id);
    if (response.status === 200) {
      const json = await response.json();
      data = json;

      const residentIds = data.residents.map((residentUrl) =>
        residentUrl.split("/").pop()
      );

      if (residentIds.length > 0) {
        const residentsResponse = await v1.getCharactersByIds(
          residentIds.join(",")
        );
        if (residentsResponse.ok) {
          const residentsData = await residentsResponse.json();

          residents = Array.isArray(residentsData)
            ? residentsData
            : [residentsData];
        }
      }

      console.log(data, residents);
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

        <div className="mb-2">
          <Tag color="blue">{data.type}</Tag>
        </div>

        <div className="mb-2">
          <strong>Dimension: </strong>
          {data.dimension}
        </div>

        <div className="mb-2">
          <strong>Residents: </strong>
          <ul>
            {residents.length > 0 ? (
              residents.map((resident, index) => (
                <li key={index}>
                  <Link href={`/characters/${resident.id}`}>
                    {resident.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>No residents available.</p>
            )}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default LocationDetail;
