import ApiClient from "./apiClient";

const v1 = {
  getAllCharacters: async (page: number, name: string = "") => {
    const params = { page: page };
    if (name) params.name = name;
    return await ApiClient.get("character", params, false);
  },

  getCharacterById: async (id: number) => {
    return await ApiClient.get(`character/${id}`, {}, false);
  },

  getAllLocations: async (page: number, name: string = "") => {
    const params = { page: page };
    if (name) params.name = name;
    return await ApiClient.get("location", params, false);
  },

  getLocationById: async (id: number) => {
    return await ApiClient.get(`location/${id}`, {}, false);
  },

  getAllEpisodes: async (page: number, name: string = "") => {
    const params = { page: page };
    if (name) params.name = name;
    return await ApiClient.get("episode", params, false);
  },

  getEpisodeById: async (id: number) => {
    return await ApiClient.get(`episode/${id}`, {}, false);
  },

  getEpisodesByIds: async (ids: string) => {
    return await ApiClient.get(`episode/${ids}`, {}, false);
  },
};

export default v1;
