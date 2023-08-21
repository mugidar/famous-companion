import { ChatRequestOptions } from "ai";
import React, { ChangeEvent, FormEvent } from "react";
import { Input } from "../ui/input";
import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";

interface ChatFormProps {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isLoading: boolean;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
}

const ChatForm = ({ input, handleInputChange, isLoading, onSubmit } : ChatFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex px-2 bg-primary-20">
      <Input
        className="px-4 bg-primary/10"
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        placeholder="Type a message"
      />
      <Button disabled={isLoading} variant={"ghost"}>
        <SendHorizonal  />
      </Button>
    </form>
  );
};

export default ChatForm;
