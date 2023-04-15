"use client";
import { useState } from "react";
import { AiOutlineDash, AiOutlineLine } from "react-icons/ai";
import { RxBorderDotted } from "react-icons/rx";
import EditComponentWraper from "./EditComponentWraper";
import EditorHeader from "./EditorHeader";
import { Border, BorderRadius, Exit } from "./Icons";
import { ColorInput, IconBox, Input, Label } from "./EditorComponents";

const borderRadius = ["top-left", "top-right", "bottom-left", "bottom-right"];
const borders = ["top", "right", "bottom", "left"];

const Borders = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <EditorHeader title="Borders" clicked={clicked} setClicked={setClicked} />
      {clicked && (
        <EditComponentWraper>
          <div className="col-span-4 flex flex-wrap">
            {borderRadius.map(item => (
              <IconBox
                key={item}
                icon={<BorderRadius position={item} />}
                width="1/4"
              />
            ))}
          </div>

          <Input placeholder="--" label="Border Radius" span="2:2" />
          <div className="col-span-4 flex flex-wrap">
            {borders.map(item => (
              <IconBox
                key={item}
                icon={<Border position={item} />}
                width="1/4"
              />
            ))}
          </div>

          <Label label="Style" span="1" />
          <div className="col-span-3 flex flex-wrap">
            <IconBox icon={<Exit />} width="1/4" />
            <IconBox icon={<AiOutlineLine />} width="1/4" />
            <IconBox icon={<AiOutlineDash />} width="1/4" />
            <IconBox icon={<RxBorderDotted />} width="1/4" />
          </div>

          <Input label="Width" placeholder="--" span="1:3" />
          <ColorInput />
        </EditComponentWraper>
      )}
    </div>
  );
};

export default Borders;
