"use client";

import NotFoundImage from "@/assets/NotFound.png";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='h-[80vh] grid place-content-center'>
      <Image src={NotFoundImage} width={300} height={300} alt='Not found' />
      <Link className='text-center bg-white rounded py-4 font-bold' href={"/"}>
        Go back home
      </Link>
    </div>
  );
}
