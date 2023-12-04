"use client";
import { tailChase } from "ldrs";

tailChase.register();

export default function Loading() {
  return (
    <div className='w-full h-[80vh] grid place-content-center'>
      <l-tail-chase size='40' speed='1.75' color='white'></l-tail-chase>;
    </div>
  );
}
