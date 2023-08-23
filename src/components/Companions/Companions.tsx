import { Companion } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { MessagesSquare } from "lucide-react";
import Link from "next/link";

const Companions = ({
  data
}: {
  data: (Companion & { _count: { messages: number } })[];
}) => {
  if (data.length === 0) {
    return (
      <div className="pt-10 flex flex-col items-center">
        No companions found.
      </div>
    );
  }

  return (
    <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
      {data.map((item) => (
        <>
          <Card key={item.id}>
            <Link className="flex flex-col h-full" href={`/chat/${item.id}`}>
              <CardHeader className="flex flex-1 items-center justify-start text-center text-muted-foreground">
              <div className="relative w-32 h-32">
                <Image
                  src={item.src}
                  fill
                  className="rounded-xl object-cover"
                  alt="Character"
                />
              </div>
                <h1 className="">{item.name}</h1>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardHeader>
              <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
                <p className="lowercase">@{item.userName}</p>
                <div className="flex items-center gap-2">
                  <MessagesSquare />{" "}
                  <span className="text-lg">{item._count.messages}</span>
                </div>
              </CardFooter>
            </Link>
          </Card>{" "}
     
         
       
        </>
      ))}
    </div>
  );
};

export default Companions;
