import React from "react";
import v1 from "../../api/v1";

const page = async () => {
  let data = [];
  let info = {};
  try {
    const response = await v1.getCharacterById(1);
    data = response.results;
    info = response.info;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
  return (
    <div>
      {data.map((item) => (
        <div className="border-2" key={item.id}>
          <div>id{item.id}</div>
          <div> name{item.name}</div>
          <div>status{item.status}</div>
          <div>sepcies{item.species}</div>
          <div>type{item.type}</div>
          <div>gender{item.gender}</div>
          <div>image{item.image}</div>

          <div>
            <div className="text-red-600 text-2xl">origin</div>
            <div>{item.origin.name}</div>
            <div>{item.origin.url}</div>
          </div>
          <div>
            <div className="text-red-600 text-2xl">location</div>
            <div>{item.location.name}</div>
            <div>{item.location.url}</div>
          </div>
          <div>
            <div className="text-red-600 text-2xl">episode</div>
            <div>
              {item.episode.map((episode) => (
                <div key={episode}>{episode}</div>
              ))}
            </div>
          </div>
          <div>{item.url}</div>
          <div>{item.created}</div>
        </div>
      ))}
    </div>
  );
};

export default page;
