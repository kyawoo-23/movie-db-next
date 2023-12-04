"use client";
import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <SyncLoader color='white' />
    </div>
  );
}
