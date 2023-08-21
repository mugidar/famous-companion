"use client";

import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoriesProps {
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategoryId = searchParams.get("categoryId");
  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    });
    router.push(url);
  };

  return (
    <div className="w-full flex overflow-auto space-x-2 p-1 ">
      <button
        onClick={() => onClick(undefined)}
        className={cn(`
        flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition
        `,  !currentCategoryId  && "bg-primary/30")}
      >
        Newest
      </button>
      {categories.map((category) => (
        <button
          onClick={() => onClick(category.id)}
          key={category.id}
          className={cn(`
      flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition
      `, category.id === currentCategoryId && "bg-primary/30") }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
