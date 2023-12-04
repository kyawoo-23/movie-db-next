import GridContainer from "@/components/GridContainer";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import { DiscoverAPI } from "@/lib/axios/discoverAPI";

export default async function Home() {
  const { data } = await DiscoverAPI.GetAll(1);

  return (
    <>
      <Pagination
        totalPage={data.total_pages}
        type='DISCOVER'
        currentPage={1}
      />
      <GridContainer>
        {data.results.map((d) => (
          <MovieCard
            key={d.id}
            id={d.id}
            imgPath={d.poster_path}
            rating={d.vote_average}
            title={d.title}
          />
        ))}
      </GridContainer>
    </>
  );
}
