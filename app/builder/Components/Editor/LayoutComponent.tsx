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

const LayoutComponent = () => {
  return (
    <div>
      <EditorHeader title="Layout" />
      <div className="border-b border-builder-darker p-2">
        <div className="mb-2">
          <div className="w-fit rounded px-1 text-xs text-blue-300">
            Display
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="border border-builder-darker bg-builder-box p-2">
            <Block />
          </div>
          <div className="border border-builder-darker bg-builder-box p-2">
            <Flex />
          </div>
          <div className="border border-builder-darker bg-builder-box p-2">
            <Grid />
          </div>
          <div className="border border-builder-darker bg-builder-box p-2">
            <InlineBlock />
          </div>
          <div className="border border-builder-darker bg-builder-box p-2">
            <Inline />
          </div>
          <div className="border border-builder-darker bg-builder-box p-2">
            <None />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
