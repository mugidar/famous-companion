"use client";

import { Companion } from "@prisma/client";
import { Message } from "postcss";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  Edit,
  MessageSquare,
  MoreVertical,
  Trash
} from "lucide-react";
import { useRouter } from "next/navigation";
import BotAvatar from "../BotAvatar/BotAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { useUser } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import axios from "axios";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatHeader = ({ companion }: ChatClientProps) => {
  const router = useRouter();
  const { user } = useUser();
  const { toast } = useToast();

  const onDelete = async () => {
    try {
      await axios.delete(`/api/companion/${companion.id}`);

      toast({
        description: "Success."
      });
      router.refresh()
      router.push("/")
    } catch (error) {
      toast({
        description: "Smth went wrong.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex w-full justify-between items-center border-b border-primary/10 py-5">
      <div className="flex gap-x-2 items-center">
        <Button onClick={() => router.back()} size={"icon"} variant={"ghost"}>
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <BotAvatar src={companion.src} />
        <div className="flex items-end gap-y-1">
          <div>
            <div className="font-bold">{companion.name}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <MessageSquare className="w-3 h-3 mr-1" />
              {companion._count.messages}
            </div>
          </div>
          {/* <p className="text-xs text-muted-foreground">
            Created by {companion.userName}
          </p> */}
        </div>
      </div>
      {user?.id === companion.userId && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => router.push(`/companion/${companion.id}`)}
            >
              <Edit />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDelete}>
              <Trash />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default ChatHeader;
