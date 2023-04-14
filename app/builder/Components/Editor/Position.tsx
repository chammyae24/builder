"use client";
import { TfiLayoutMediaLeft, TfiLayoutMediaRight } from "react-icons/tfi";
import { GoArrowLeft, GoArrowRight, GoArrowBoth } from "react-icons/go";
import EditorHeader from "./EditorHeader";
import EditComponentWraper from "./EditComponentWraper";
import { Exit } from "./Icons";

const Position = () => {
  return (
    <div>
      <EditorHeader title="Position" />
      <EditComponentWraper>
        <span className="col-span-1 text-xs text-blue-300">Position</span>
        <select className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs">
          <option value="">Static</option>
          <option value="">Relative</option>
          <option value="">Absolute</option>
          <option value="">Fixed</option>
          <option value="">Sticky</option>
        </select>
        <div className="col-span-4 border-b border-builder-darker">
          <div className="relative h-14 border-[20px] border-builder-darker border-y-builder-box">
            <div>
              <button className="absolute left-1/2 top-[calc(100%+_2px)] -translate-x-1/2 text-xs">
                A
              </button>
              <button className="absolute bottom-[calc(100%+_2px)] left-1/2 -translate-x-1/2 text-xs">
                A
              </button>
              <button className="absolute right-[calc(100%+_6px)] text-xs">
                A
              </button>
              <button className="absolute left-[calc(100%+_6px)] text-xs">
                A
              </button>
            </div>
          </div>
        </div>
        <span className="col-span-1 text-xs text-blue-300">Relative to</span>
        <input
          type="text"
          className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
          placeholder="body"
        />
        <span className="col-span-1 text-xs text-blue-300">Z-index</span>
        <input
          type="text"
          className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
          placeholder="Auto"
        />
        <span className="col-span-1 text-xs text-blue-300">Float</span>
        <div className="col-span-3 flex flex-wrap">
          <button className="flex w-1/3 justify-center border border-builder-darker bg-builder-box p-2">
            <Exit />
          </button>
          <button className="flex w-1/3 justify-center border border-builder-darker bg-builder-box p-2">
            <TfiLayoutMediaLeft />
          </button>
          <button className="flex w-1/3 justify-center border border-builder-darker bg-builder-box p-2">
            <TfiLayoutMediaRight />
          </button>
        </div>

        <span className="col-span-1 text-xs text-blue-300">Clear</span>
        <div className="col-span-3 flex flex-wrap">
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <Exit />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <GoArrowLeft />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <GoArrowRight />
          </button>
          <button className="flex w-1/4 justify-center border border-builder-darker bg-builder-box p-2">
            <GoArrowBoth />
          </button>
        </div>
      </EditComponentWraper>
    </div>
  );
};

export default Position;
