"use client";
import { useState } from "react";
import { CgScrollV } from "react-icons/cg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import EditorHeader from "./EditorHeader";
import EditComponentWraper from "./EditComponentWraper";
import { IconBox, Input, Label, Option, Selector } from "./EditorComponents";
import SaveEditButton from "./SaveEditButton";

const fits: Option[] = [
  { label: "Fill", value: "fill" },
  { label: "Contain", value: "contain" },
  { label: "Cover", value: "cover" },
  { label: "Scale Down", value: "scale-down" },
  { label: "None", value: "none" }
];

const Size = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <EditorHeader title="Size" clicked={clicked} setClicked={setClicked} />
      {clicked && (
        <>
          <EditComponentWraper>
            <Input label="Width" placeholder="--" span="1:1" />
            <Input label="Height" placeholder="--" span="1:1" />
            <Input label="Min W" placeholder="--" span="1:1" />
            <Input label="Min H" placeholder="--" span="1:1" />
            <Input label="Max W" placeholder="--" span="1:1" />
            <Input label="Max H" placeholder="--" span="1:1" />
          </EditComponentWraper>
          <EditComponentWraper>
            <Label label="Overflow" span="1" />
            <div className="col-span-3 flex flex-wrap">
              <IconBox icon={<AiOutlineEye />} width="1/4" />
              <IconBox icon={<AiOutlineEyeInvisible />} width="1/4" />
              <IconBox icon={<CgScrollV />} width="1/4" />
              <IconBox
                icon={<span className="text-xs">Auto</span>}
                width="1/4"
              />
            </div>
            <Selector label="Fit" span="1:3" options={fits} />
            <Label label="Object Position" span="1" />
            <div className="col-span-3 grid grid-cols-4">
              <Input label="Left" placeholder="--" span="2:2" />
              <Input label="Top" placeholder="--" span="2:2" />
            </div>
            <SaveEditButton />
          </EditComponentWraper>
        </>
      )}
    </div>
  );
};

export default Size;
