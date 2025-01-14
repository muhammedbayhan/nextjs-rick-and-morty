import Link from "next/link";
import v1 from "../../api/v1";
import { Card, Avatar, Tag } from "antd";

const LocationDetail = async ({ params }) => {
  const { id } = await params;
  let data = {};
  try {
    const response = await v1.getLocationById(id);
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
            {data.residents && data.residents.length > 0 ? (
              data.residents.map((residentUrl, index) => (
                <li key={index}>
                  <Link href={`/characters/${residentUrl.split("/").pop()}`}>
                    Resident {residentUrl.split("/").pop()}
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
