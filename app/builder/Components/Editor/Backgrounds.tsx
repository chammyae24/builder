"use client";

import { BiGridHorizontal, BiGridVertical } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { RiGradienterFill } from "react-icons/ri";
import { MdImage, MdGradient } from "react-icons/md";
import { ImCheckboxUnchecked } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import EditComponentWraper from "./EditComponentWraper";
import EditorHeader from "./EditorHeader";
import { Exit, Plus } from "./Icons";

const Backgrounds = () => {
  return (
    <div>
      <EditorHeader title="Backgrounds" />
      <EditComponentWraper>
        <div className="col-span-4 flex items-center justify-center gap-2 bg-builder-darker p-2">
          <Plus />
          <h1 className="text-xs">Background image</h1>
        </div>
        <span className="col-span-1 break-words text-xs text-blue-300">
          Type
        </span>
        <div className="col-span-3 flex flex-wrap">
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <MdImage />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <MdGradient />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <RiGradienterFill />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <ImCheckboxUnchecked />
          </button>
        </div>
        <span className="col-span-1 break-words text-xs text-blue-300">
          Image
        </span>
        <div className="relative col-span-3 w-full cursor-pointer border-2 border-dashed border-builder-darker bg-builder-box px-1 text-xs">
          <AiOutlinePlus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-300" />
          <input type="file" className="w-full opacity-0" />
        </div>

        <span className="col-span-1 break-words text-xs text-blue-300">
          Size
        </span>
        <div className="col-span-3 flex flex-wrap">
          <button className="flex w-1/3 justify-center border border-builder-darker bg-builder-box p-2 text-[10px]">
            Custom
          </button>
          <button className="flex w-1/3 justify-center border border-builder-darker bg-builder-box p-2 text-[10px]">
            Cover
          </button>
          <button className="flex w-1/3 justify-center border border-builder-darker bg-builder-box p-2 text-[10px]">
            Contain
          </button>
        </div>

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

        <span className="col-span-1 text-xs text-blue-300">Position</span>
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

        <span className="col-span-1 break-words text-xs text-blue-300">
          Tile
        </span>
        <div className="col-span-3 flex flex-wrap">
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <CgMenuGridR />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <BiGridHorizontal />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <BiGridVertical />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <Exit />
          </button>
        </div>

        <div className="col-span-4 flex flex-wrap">
          <button className="flex w-1/2 justify-center border border-builder-darker bg-builder-box p-2 text-[10px]">
            Fixed
          </button>
          <button className="flex w-1/2 justify-center border border-builder-darker bg-builder-box p-2 text-[10px]">
            Not Fixed
          </button>
        </div>

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

        <span className="col-span-1 text-xs text-blue-300">Clipping</span>
        <div className="col-span-3 flex flex-wrap">
          <button className="flex w-1/3 justify-center border border-builder-darker bg-builder-box p-2 text-[10px]">
            Padding
          </button>
          <button className="flex w-1/3 justify-center border border-builder-darker bg-builder-box p-2 text-[10px]">
            Content
          </button>
          <button className="flex w-1/3 justify-center border border-builder-darker bg-builder-box p-2 text-[10px]">
            Text
          </button>
        </div>
      </EditComponentWraper>
    </div>
  );
};

export default Backgrounds;
