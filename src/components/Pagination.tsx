"use client";
import ReactPaginate from "react-paginate";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";

type DiscoverPropType = {
  type: "DISCOVER";
  totalPage: number;
  currentPage: number;
};

type SearchPropType = {
  type: "SEARCH";
  totalPage: number;
  currentPage: number;
  query: string;
};

type PaginationProps = DiscoverPropType | SearchPropType;

const Pagination = (props: PaginationProps) => {
  const router = useRouter();

  const handlePaginateClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    if (props.type === "DISCOVER") {
      router.push(`/page/${page}`);
    } else if (props.type === "SEARCH") {
      router.push(`/search/${props.query}/${page}`);
    }
  };
  return (
    <div className='flex justify-end mb-12'>
      <ReactPaginate
        initialPage={props.currentPage - 1}
        breakLabel='...'
        nextLabel={<BiSolidRightArrow className='mx-2' />}
        onPageChange={handlePaginateClick}
        pageRangeDisplayed={5}
        pageCount={Math.min(props.totalPage, 500)}
        previousLabel={<BiSolidLeftArrow className='mx-2' />}
        renderOnZeroPageCount={null}
        className='flex items-center font-semibold text-sm my-2 bg-blue-200 rounded-full w-fit px-6 py-3'
        pageClassName='mx-2 rounded ring-1 ring-black'
        pageLinkClassName='text-[#393939] text-xs w-6 h-6 grid place-content-center'
        activeClassName='ring-primary'
        activeLinkClassName='rounded text-white bg-blue-600'
        disabledClassName='text-slate-500'
      />
    </div>
  );
};

export default Pagination;
