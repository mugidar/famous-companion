"use client";
import { Search } from "lucide-react";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Input } from "./input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import qs from "query-string";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId 
    };

    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, {skipEmptyString: true, skipNull: true});

    router.push(url)
  }, [debouncedValue, router, categoryId]);

  return (
    <div className="flex box-border border-2  border-primary/30 rounded-lg px-2 h-10 items-center w-full">
      <Search size={30} className=" h-full border-r-2 pr-2 cursor-pointer" />
      <Input
      value={value}
        onChange={onChange}
        placeholder="Search..."
        className="ml-2 border-0 outline-0"
      />
    </div>
  );
};

export default SearchInput;
