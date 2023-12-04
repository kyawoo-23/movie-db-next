import GridContainer from "@/components/GridContainer";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import { DiscoverAPI } from "@/lib/axios/discoverAPI";

export default async function HomePaginatePage({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await DiscoverAPI.GetAll(parseInt(params.slug));

  return (
    <>
      <Pagination
        totalPage={data.total_pages}
        type='DISCOVER'
        currentPage={parseInt(params.slug)}
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
