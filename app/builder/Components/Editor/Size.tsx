"use client";
import { useState } from "react";
import { CgScrollV } from "react-icons/cg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import EditorHeader from "./EditorHeader";
import EditComponentWraper from "./EditComponentWraper";
import { IconBox, Input, Label } from "./EditorComponents";

const Size = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <EditorHeader title="Size" clicked={clicked} setClicked={setClicked} />
      {clicked && (
        <>
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
              <IconBox icon={<AiOutlineEye />} width="1/4" />
              <IconBox icon={<AiOutlineEyeInvisible />} width="1/4" />
              <IconBox icon={<CgScrollV />} width="1/4" />
              <IconBox
                icon={<span className="text-xs">Auto</span>}
                width="1/4"
              />
            </div>
            <span className="col-span-1 text-xs text-blue-300">Fit</span>
            <select className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs">
              <option value="">Fill</option>
              <option value="">Contain</option>
              <option value="">Cover</option>
              <option value="">None</option>
              <option value="">Scale Down</option>
            </select>
            <Label label="Object Position" span="1" />
            <div className="col-span-3 grid grid-cols-4">
              <Input label="Left" placeholder="--" span="2:2" />
              <Input label="Top" placeholder="--" span="2:2" />
            </div>
          </EditComponentWraper>
        </>
      )}
    </div>
  );
};

export default Size;
