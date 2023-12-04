import { DetailsAPI } from "@/lib/axios/detailsAPI";
import Image from "next/image";
import PlaceHolderImage from "@/assets/Placeholder.png";
import Pill from "@/components/Pill";

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await DetailsAPI.GetDetails(parseInt(params.id));

  return (
    <>
      <div className='mt-14 relative'>
        <Image
          src={
            data.backdrop_path === null
              ? PlaceHolderImage
              : `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`
          }
          className='opacity-50 h-[500px] w-full object-cover'
          alt={data.title}
          width={1280}
          height={600}
        />
        <div className='grid grid-cols-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-10 gap-10'>
          <div className='col-span-1'>
            <Image
              src={
                data.poster_path === null
                  ? PlaceHolderImage
                  : `https://image.tmdb.org/t/p/w342/${data.poster_path}`
              }
              className='h-[400px] rounded object-cover'
              alt={data.title}
              width={300}
              height={400}
            />
          </div>
          <div className='col-span-3 rounded bg-slate-950 bg-opacity-70 text-white p-8 flex flex-col gap-3'>
            <h2 className='text-2xl font-semibold'>{data.title}</h2>
            <div className='flex items-center gap-5 my-1'>
              <div className='rounded-full w-12 h-12 ring ring-blue-600 grid place-content-center font-extrabold'>
                {data.vote_average.toFixed(1)}
              </div>
              <div className='flex items-center gap-3 flex-wrap'>
                {data.genres.map((g) => (
                  <Pill data={g.name} key={g.id} />
                ))}
              </div>
            </div>
            <div className='h-[160px]'>
              <p className='italic text-white text-[14px] text-opacity-70 mb-2'>
                {data.tagline}
              </p>
              <h6 className='text-lg'>Overview</h6>
              <p className='text-sm mt-1 line-clamp-6 w-3/4'>{data.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
