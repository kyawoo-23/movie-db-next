import { MovieAPI } from "@/lib/axios/config";
import { MovieDetailsResponse } from "@/utils/types";

export const DetailsAPI = {
  GetDetails: async function (movie_id: number) {
    return await MovieAPI.get<MovieDetailsResponse>(`movie/${movie_id}`);
  },
};
