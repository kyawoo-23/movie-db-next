"use client";
import ErrorFoundImage from "@/assets/ErrorFound.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='h-[80vh] flex flex-col justify-center items-center'>
      <Image src={ErrorFoundImage} width={300} height={300} alt='Not found' />
      <Link
        className='text-center bg-white rounded py-4 font-bold w-56'
        href={"/"}
      >
        Go back home
      </Link>
      <p className='text-red-500 text-center mt-4'>
        {error.name} : {error.message}
      </p>
    </div>
  );
};

export default Error;
