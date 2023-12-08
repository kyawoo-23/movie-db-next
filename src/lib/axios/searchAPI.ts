import { MovieAPI } from "@/lib/axios/config";
import { MoviesResponse } from "@/utils/types";

export const SearchAPI = {
  SearchQuery: async function (page: number, query: string) {
    return await MovieAPI.get<MoviesResponse>(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
    );
  },
};
