import ApiClient from "./apiClient";

const v1 = {
  getAllCharacters: async (page: number) => {
    return await ApiClient.get("character", { page: page }, false);
  },

  getCharacterById: async (id: number) => {
    return await ApiClient.get(`character/${id}`, {}, false);
  },

  getAllEpisodes: async (page: number) => {
    return await ApiClient.get("episode", { page: page });
  },

  getEpisodeById: async (id: number) => {
    return await ApiClient.get(`episode/${id}`);
  },

  getAllLocations: async (page: number) => {
    return await ApiClient.get("location", { page: page });
  },

  getLocationById: async (id: number) => {
    return await ApiClient.get(`location/${id}`);
  },
};

export default v1;
