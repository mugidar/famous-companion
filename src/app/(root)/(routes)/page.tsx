import Categories from "@/components/Categories/Categories";
import Companions from "@/components/Companions/Companions";
import SearchInput from "@/components/ui/search-input";
import prismadb from "@/lib/prismadb";
import Image from "next/image";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const Home = async ({ searchParams }: RootPageProps) => {
  const categories = await prismadb.category.findMany({});
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name
      }
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      _count: {
        select: {
          messages: true
        }
      }
    }
  });

  console.log(data);
  return (
    <div className="h-full w-full p-4 space-y-2">
      <SearchInput />
      <Categories categories={categories} />
      <Companions data={data}/>
     
    </div>
  );
};

export default Home;
