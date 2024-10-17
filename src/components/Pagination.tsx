import { useState } from "react";
import { Product } from "../Services/ProductsServices";
import ProductCard from "./ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  products: Array<Product> | null;
}

const Pagination = ({ products }: PaginationProps) => {
  const [currentPage, setcurrentPage] = useState<number>(0);
  const productPerPage = 8;
  const numberOfPages = Math.ceil((products?.length || 0) / productPerPage);
  const firstProductIndex = currentPage * productPerPage;
  const lastProductIndex = (currentPage + 1) * productPerPage;

  let paginationNav: Array<number | string> = [1];
  for (let index = 1; index < numberOfPages; index++) {
    if (
      index == currentPage - 1 ||
      index == currentPage ||
      index == currentPage + 1
    ) {
      paginationNav[index] = index + 1;
    } else if (index == currentPage - 2 || index == currentPage + 2)
      paginationNav[index] = "...";
  }
  if (numberOfPages > 2) paginationNav[numberOfPages - 1] = numberOfPages;

  return (
    <div>
      <div className="flex flex-wrap gap-x-0.4/10 gap-y-5">
        {products ? (
          products
            ?.slice(firstProductIndex, lastProductIndex)
            .map((element, index) => (
              <ProductCard
                product={element}
                key={index}
              />
            ))
        ) : (
          <p>loading</p>
        )}
      </div>
      <div className="flex gap-4 justify-center xl:mt-20 md:mt-8">
        {products && (
          <>
            <p
              className="aspect-square flex justify-center rounded-full transition duration-500 items-center cursor-pointer bg-white border-2 border-slate-200 xl:w-14 md:w-11"
              onClick={() =>
                currentPage != 0 && setcurrentPage(currentPage - 1)
              }
            >
              <IoIosArrowBack />
            </p>
            {paginationNav.map((element, index) => (
              <p
                key={index}
                className={`aspect-square flex justify-center rounded-full transition duration-500 items-center cursor-pointer ${
                  index == currentPage
                    ? "bg-orange-450"
                    : "bg-white border-2 border-slate-200"
                } xl:w-14 md:w-11`}
                onClick={() => {
                  if (element == "...") {
                    if (index < currentPage) setcurrentPage(0);
                    else setcurrentPage(numberOfPages - 1);
                  } else setcurrentPage(index);
                }}
              >
                {element}
              </p>
            ))}
            <p
              className="aspect-square flex justify-center rounded-full transition duration-500 items-center cursor-pointer bg-white border-2 border-slate-200 xl:w-14 md:w-11"
              onClick={() =>
                currentPage != numberOfPages - 1 &&
                setcurrentPage(currentPage + 1)
              }
            >
              <IoIosArrowForward />
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
