"use client";
import {
  CgDisplayFullwidth as Block,
  CgDisplaySpacing as InlineBlock,
  CgDisplayFlex as Flex,
  CgDisplayGrid as Grid
} from "react-icons/cg";
import { AiOutlineEyeInvisible as None } from "react-icons/ai";
import { IoText as Inline } from "react-icons/io5";
import EditorHeader from "./EditorHeader";
import EditComponentWraper from "./EditComponentWraper";
import { IconBox } from "./EditorComponents";
import { useState } from "react";

const LayoutComponent = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <EditorHeader title="Layout" clicked={clicked} setClicked={setClicked} />
      {clicked && (
        <EditComponentWraper>
          <div className="col-span-4">
            <div className="w-fit rounded px-1 text-xs text-blue-300">
              Display
            </div>
          </div>
          <div className="col-span-4 flex flex-wrap">
            <IconBox icon={<Block />} />
            <IconBox icon={<Flex />} />
            <IconBox icon={<Grid />} />
            <IconBox icon={<InlineBlock />} />
            <IconBox icon={<Inline />} />
            <IconBox icon={<None />} />
          </div>
        </EditComponentWraper>
      )}
    </div>
  );
};

export default LayoutComponent;
