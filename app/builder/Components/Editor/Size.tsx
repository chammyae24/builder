"use client";
import { CgScrollV } from "react-icons/cg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import EditorHeader from "./EditorHeader";
import EditComponentWraper from "./EditComponentWraper";

const Size = () => {
  return (
    <div>
      <EditorHeader title="Size" />
      <EditComponentWraper>
        <div className="col-span-2 flex items-center justify-between gap-1">
          <span className="text-xs text-blue-300">Width</span>
          <input
            type="text"
            placeholder="--"
            className="w-14 border-2 border-builder-darker bg-builder-box px-1 text-xs"
          />
        </div>
        <div className="col-span-2 flex items-center justify-between gap-1">
          <span className="text-xs text-blue-300">Height</span>
          <input
            type="text"
            placeholder="--"
            className="w-14 border-2 border-builder-darker bg-builder-box px-1 text-xs"
          />
        </div>
        <div className="col-span-2 flex items-center justify-between gap-1">
          <span className="text-xs text-blue-300">Min W</span>
          <input
            type="text"
            placeholder="--"
            className="w-14 border-2 border-builder-darker bg-builder-box px-1 text-xs"
          />
        </div>
        <div className="col-span-2 flex items-center justify-between gap-1">
          <span className="text-xs text-blue-300">Min H</span>
          <input
            type="text"
            placeholder="--"
            className="w-14 border-2 border-builder-darker bg-builder-box px-1 text-xs"
          />
        </div>
        <div className="col-span-2 flex items-center justify-between gap-1">
          <span className="text-xs text-blue-300">Max W</span>
          <input
            type="text"
            placeholder="--"
            className="w-14 border-2 border-builder-darker bg-builder-box px-1 text-xs"
          />
        </div>
        <div className="col-span-2 flex items-center justify-between gap-1">
          <span className="text-xs text-blue-300">Max H</span>
          <input
            type="text"
            placeholder="--"
            className="w-14 border-2 border-builder-darker bg-builder-box px-1 text-xs"
          />
        </div>
      </EditComponentWraper>
      <EditComponentWraper>
        <span className="col-span-1 text-xs text-blue-300">Overflow</span>
        <div className="col-span-3 flex flex-wrap">
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <AiOutlineEye />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <AiOutlineEyeInvisible />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <CgScrollV />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2 text-[10px]">
            Auto
          </button>
        </div>
        <span className="col-span-1 text-xs text-blue-300">Fit</span>
        <select className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs">
          <option value="">Fill</option>
          <option value="">Contain</option>
          <option value="">Cover</option>
          <option value="">None</option>
          <option value="">Scale Down</option>
        </select>
        <span className="col-span-1 text-xs text-blue-300">
          Object Position
        </span>
        <div className="col-span-3 flex">
          <div className="grid">
            <input
              type="text"
              placeholder="--"
              className="w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
            />
            <span className="text-xs text-blue-300">Left</span>
          </div>
          <div className="grid">
            <input
              type="text"
              placeholder="--"
              className="w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
            />
            <span className="text-xs text-blue-300">Top</span>
          </div>
        </div>
      </EditComponentWraper>
    </div>
  );
};

export default Size;
