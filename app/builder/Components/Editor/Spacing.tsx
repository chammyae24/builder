"use client";
import { useState } from "react";
import EditorHeader from "./EditorHeader";
import SaveEditButton from "./SaveEditButton";
import EditComponentWraper from "./EditComponentWraper";

const Spacing = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <EditorHeader title="Spacing" clicked={clicked} setClicked={setClicked} />
      {clicked && (
        <EditComponentWraper>
          <div className="relative col-span-4 border-[20px] border-builder-box border-y-builder-darker p-1">
            <div className="h-14 border-[20px] border-builder-darker border-y-builder-box">
              <div>
                <span className="absolute -left-4 bottom-[calc(100%+_6px)] text-[8px] text-blue-300">
                  Margin
                </span>
                <button className="absolute left-1/2 top-[calc(100%+_2px)] -translate-x-1/2 text-xs">
                  0
                </button>
                <button className="absolute bottom-[calc(100%+_2px)] left-1/2 -translate-x-1/2 text-xs">
                  0
                </button>
                <button className="absolute right-[calc(100%+_6px)] text-xs">
                  0
                </button>
                <button className="absolute left-[calc(100%+_6px)] text-xs">
                  0
                </button>
              </div>
              <div>
                <span className="absolute left-2 top-1 text-[8px] text-blue-300">
                  Padding
                </span>
                <button className="absolute left-1/2 top-1 -translate-x-1/2 text-xs">
                  0
                </button>
                <button className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs">
                  0
                </button>
                <button className="absolute left-2 text-xs">0</button>
                <button className="absolute right-2 text-xs">0</button>
              </div>
            </div>
          </div>
          <SaveEditButton />
        </EditComponentWraper>
      )}
    </div>
  );
};

export default Spacing;
