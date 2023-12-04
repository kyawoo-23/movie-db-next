import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import PlaceHolderImg from "@/assets/Placeholder.png";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  title: string;
  id: number;
  imgPath: string;
  rating: number;
}

function MovieCard({ id, imgPath, rating, title }: MovieCardProps) {
  const renderStars = (count: number) => {
    const stars = [];
    const fullStars = Math.floor(count);
    const hasHalfStar = count % 1 >= 0.5;

    for (let index = 0; index < fullStars; index++) {
      stars.push(
        <span key={index} className='text-primary'>
          <BsStarFill className='w-3' />
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key={fullStars} className='text-primary'>
          <BsStarHalf className='w-3' />
        </span>
      );
    }

    for (let index = fullStars + (hasHalfStar ? 1 : 0); index < 10; index++) {
      stars.push(
        <span key={index} className='text-primary'>
          <BsStar className='w-3' />
        </span>
      );
    }

    return stars;
  };

  return (
    <div className='bg-slate-950 text-white rounded-lg overflow-hidden hover:ring-4 hover:ring-primary transition-all w-[240px]'>
      <div>
        <Image
          className='object-cover w-full h-[360px]'
          src={
            imgPath === null
              ? PlaceHolderImg
              : `https://image.tmdb.org/t/p/w400/${imgPath}`
          }
          alt={title}
          height={360}
          width={240}
        />
      </div>
      <div className='px-5 py-3'>
        <h3 className='truncate text-md'>{title}</h3>
      </div>
      <div className='px-5 flex items-center gap-0.5'>
        {renderStars(rating)}{" "}
        <span className='text-xs ml-1 bg-primary px-2 rounded-full'>
          {rating.toFixed(1)}
        </span>
      </div>
      <div className='flex justify-end p-3 pb-5'>
        <Link
          href={`/details/${id}`}
          className='mr-3 ring-1 ring-white px-4 py-2 text-xs rounded-full hover:bg-white hover:text-black transition-colors hover:animate-pulse font-semibold'
        >
          See more
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
