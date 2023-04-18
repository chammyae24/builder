import { ReactElement } from "react";
import { Plus } from "./Icons";
import { AiOutlinePlus } from "react-icons/ai";

type IconBoxProps = {
  icon: ReactElement;
  width?: string;
};
export const IconBox = ({ icon, width = "" }: IconBoxProps) => {
  // width could be w-1/2 or w-1/3 or w-1/4
  return (
    <button
      className={`w-${width} flex items-center justify-center border border-builder-darker bg-builder-box p-2 hover:bg-builder-darker`}
    >
      {icon}
    </button>
  );
};

export const ToggleMore = ({ text }: { text: string }) => {
  return (
    <button className="col-span-4 flex items-center justify-between gap-2 bg-builder-darker p-2 hover:bg-builder-box">
      <h1 className="text-xs">{text}</h1>
      <Plus />
    </button>
  );
};

type LabelProps = {
  label: string;
  span: string;
};
export const Label = ({ label, span = "" }: LabelProps) => (
  <span className={`col-span-${span} break-words text-xs text-blue-300`}>
    {label}
  </span>
);

type InputProps = {
  label: string;
  span?: string;
  placeholder: string;
};
export const Input = ({ label, span = ":", placeholder }: InputProps) => {
  return (
    <>
      <Label label={label} span={span.split(":")[0]} />
      <input
        type="text"
        placeholder={placeholder}
        className={`col-span-${
          span.split(":")[1]
        } w-full border-2 border-builder-darker bg-builder-box px-1 text-xs`}
      />
    </>
  );
};

export const ColorInput = () => (
  <>
    <Label label="Color" span="1" />
    <div className="relative col-span-3">
      <input
        type="color"
        className="absolute left-0 top-[2px] h-[22px] w-[22px] text-xs outline-none"
      />
      <input
        type="text"
        className="w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
      />
    </div>
  </>
);

export const FileInput = () => (
  <>
    <Label label="Image" span="1" />
    <div className="relative col-span-3 w-full cursor-pointer border-2 border-dashed border-builder-darker bg-builder-box px-1 text-xs">
      <AiOutlinePlus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-300" />
      <input type="file" className="w-full opacity-0" />
    </div>
  </>
);

export type Option = {
  value: string;
  label: string;
};
type SelectProps = {
  label: string;
  span?: string;
  options: Option[];
};
export const Selector = ({ label, span = ":", options = [] }: SelectProps) => {
  return (
    <>
      <Label label={label} span={span.split(":")[0]} />
      <select className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs">
        {options.map(option => (
          <option key={option.value} value="">
            {option.value}
          </option>
        ))}
      </select>
    </>
  );
};
