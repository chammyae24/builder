"use client";
import { useState } from "react";
import { TfiLayoutMediaLeft, TfiLayoutMediaRight } from "react-icons/tfi";
import { GoArrowLeft, GoArrowRight, GoArrowBoth } from "react-icons/go";
import EditorHeader from "./EditorHeader";
import EditComponentWraper from "./EditComponentWraper";
import { Exit } from "./Icons";
import { IconBox, Label, Option, Selector, Input } from "./EditorComponents";
import SaveEditButton from "./SaveEditButton";

const positons: Option[] = [
  { label: "Static", value: "static" },
  { label: "Relative", value: "relative" },
  { label: "Absolute", value: "absolute" },
  { label: "Fixed", value: "fixed" },
  { label: "Sticky", value: "sticky" }
];

const Position = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <EditorHeader
        title="Position"
        clicked={clicked}
        setClicked={setClicked}
      />
      {clicked && (
        <EditComponentWraper>
          <Selector label="Position" span="1:3" options={positons} />

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

          <Input label="Relative to" span="1:3" placeholder="body" />
          <Input label="Z-index" span="1:3" placeholder="auto" />

          <Label label="Float" span="1" />
          <div className="col-span-3 flex flex-wrap">
            <IconBox icon={<Exit />} width="1/3" />
            <IconBox icon={<TfiLayoutMediaLeft />} width="1/3" />
            <IconBox icon={<TfiLayoutMediaRight />} width="1/3" />
          </div>

          <Label label="Clear" span="1" />
          <div className="col-span-3 flex flex-wrap">
            <IconBox icon={<Exit />} width="1/4" />
            <IconBox icon={<GoArrowLeft />} width="1/4" />
            <IconBox icon={<GoArrowRight />} width="1/4" />
            <IconBox icon={<GoArrowBoth />} width="1/4" />
          </div>

          <SaveEditButton />
        </EditComponentWraper>
      )}
    </div>
  );
};

export default Position;
