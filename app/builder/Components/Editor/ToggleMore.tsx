import { Plus } from "./Icons";

const ToggleMore = ({ text }: { text: string }) => {
  return (
    <div className="col-span-4 flex items-center justify-between gap-2 bg-builder-darker p-2">
      <h1 className="text-xs">{text}</h1>
      <Plus />
    </div>
  );
};

export default ToggleMore;
