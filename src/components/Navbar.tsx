"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  let debounceTimer: ReturnType<typeof setTimeout>;
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounceTimer);
    const searchTerm = e.target.value.trim();
    debounceTimer = setTimeout(() => {
      searchTerm ? router.push(`/search/${searchTerm}`) : router.push("/");
    }, 1200);
  };

  return (
    <div className='flex justify-center bg-slate-950 px-24 py-5 shadow-lg'>
      <div className='w-full flex flex-row justify-between max-w-7xl'>
        <div className='text-white'>
          <Link
            href={"/"}
            className='font-bold font-mono text-xl bg-primary px-3 py-1'
          >
            TheMovieDB-NEXT
          </Link>
        </div>
        <div>
          <input
            type='text'
            placeholder='Search movie...'
            className='shadow appearance-none border rounded w-[200px] h-[30px] py-1 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary caret-primary'
            onChange={(e) => handleSearchQuery(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
