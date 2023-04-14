import { AiOutlineDash, AiOutlineLine } from "react-icons/ai";
import { RxBorderDotted } from "react-icons/rx";
import EditComponentWraper from "./EditComponentWraper";
import EditorHeader from "./EditorHeader";
import { Border, BorderRadius, Exit } from "./Icons";

const Borders = () => {
  return (
    <div>
      <EditorHeader title="Borders" />
      <EditComponentWraper>
        <div className="col-span-4 flex flex-wrap">
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <BorderRadius position="top-left" />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <BorderRadius position="top-right" />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <BorderRadius position="bottom-left" />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <BorderRadius position="bottom-right" />
          </button>
        </div>
        <span className="col-span-2 text-xs text-blue-300">Border Radius</span>
        <input
          type="text"
          placeholder="--"
          className="col-span-2 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
        />

        <div className="col-span-4 flex flex-wrap">
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <Border position="top" />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <Border position="right" />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <Border position="bottom" />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <Border position="left" />
          </button>
        </div>

        <span className="col-span-1 text-xs text-blue-300">Style</span>
        <div className="col-span-3 flex flex-wrap">
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <Exit />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <AiOutlineLine />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <AiOutlineDash />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <RxBorderDotted />
          </button>
        </div>

        <span className="col-span-1 text-xs text-blue-300">Width</span>
        <input
          type="text"
          placeholder="--"
          className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
        />

        <span className="col-span-1 text-xs text-blue-300">Color</span>
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
      </EditComponentWraper>
    </div>
  );
};

export default Borders;
