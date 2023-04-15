"use client";
import { Dispatch, SetStateAction } from "react";
import { Caret } from "./Icons";

interface EditorHeaderProps {
  title: string;
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}

const EditorHeader = ({ title, clicked, setClicked }: EditorHeaderProps) => {
  return (
    <button
      className="flex w-full items-center gap-2 bg-builder-darker p-2"
      onClick={() => setClicked(b => !b)}
    >
      <Caret deg={clicked ? 90 : 0} />
      <h1 className="text-sm font-bold">{title}</h1>
    </button>
  );
};

export default EditorHeader;
