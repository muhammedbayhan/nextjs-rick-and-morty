import Link from "next/link";
import v1 from "../../api/v1";
import { Card, Tag, Avatar, Divider } from "antd";

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
            <Tag color="blue">{data.type}</Tag>
          </div>

          <div className="text-2xl font-semibold mb-4">{data.name}</div>

          <div className="mb-4 text-lg">
            <strong>Dimension: </strong>
            {data.dimension}
          </div>
        </Card>
      </div>
      <div className="flex-1 h-full text-white">
        <Card
          bordered={false}
          className="shadow-xl rounded-lg p-6 bg-slate-700 hover:shadow-2xl transition-all duration-300"
        >
          <div className="text-3xl font-bold text-white mb-6">
            Residents of {data.name}
          </div>
          <Divider className="border-gray-600 mb-6" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residents.length > 0 ? (
              residents.map((resident, index) => (
                <li
                  key={index}
                  className="group bg-slate-600 rounded-lg p-4 flex items-center space-x-4 hover:bg-slate-500 transition-all duration-200"
                >
                  <Avatar src={resident.image} size={64} />
                  <div className="text-white">
                    <Link
                      href={`/characters/${resident.id}`}
                      className="text-lg font-semibold group-hover:text-green-400 group-hover:underline transition-all duration-300"
                    >
                      {resident.name}
                    </Link>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-300">No residents available.</p>
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default LocationDetail;
