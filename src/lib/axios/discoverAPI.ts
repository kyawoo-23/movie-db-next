import { MovieAPI } from "@/lib/axios/config";
import { MoviesResponse } from "@/utils/types";

export const DiscoverAPI = {
  GetAll: async function (page: number) {
    return await MovieAPI.get<MoviesResponse>(
      `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
    );
  },
};
