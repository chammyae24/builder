import { Caret } from "./Icons";

interface EditorHeaderProps {
  title: string;
}

const EditorHeader = ({ title }: EditorHeaderProps) => {
  return (
    <div className="flex items-center gap-2 bg-builder-darker p-2">
      <Caret />
      <h1 className="text-sm font-bold">{title}</h1>
    </div>
  );
};

export default EditorHeader;
