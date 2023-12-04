import GridContainer from "@/components/GridContainer";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import { SearchAPI } from "@/lib/axios/searchAPI";

export default async function SearchPage({
  params,
}: {
  params: { slug: string };
}) {
  const query = params.slug[0];
  const page = parseInt(params.slug[1]) || 1;

  const { data } = await SearchAPI.SearchQuery(page, query);

  return (
    <>
      <Pagination
        totalPage={data.total_pages}
        type='SEARCH'
        query={query}
        currentPage={page}
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
