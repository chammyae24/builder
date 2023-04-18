"use client";
import { useState } from "react";
import {
  GrTextAlignLeft,
  GrTextAlignRight,
  GrTextAlignCenter,
  GrTextAlignFull
} from "react-icons/gr";
import { RiStrikethrough, RiUnderline } from "react-icons/ri";
import {
  MdFormatTextdirectionLToR,
  MdFormatTextdirectionRToL
} from "react-icons/md";
import {
  RxOverline,
  RxLetterCaseUppercase,
  RxLetterCaseCapitalize,
  RxLetterCaseLowercase
} from "react-icons/rx";
import { BiItalic } from "react-icons/bi";
import EditorHeader from "./EditorHeader";
import { Exit, Plus } from "./Icons";
import EditComponentWraper from "./EditComponentWraper";
import {
  ColorInput,
  IconBox,
  Input,
  Label,
  Option,
  Selector
} from "./EditorComponents";
import { ToggleMore } from "./EditorComponents";
import SaveEditButton from "./SaveEditButton";

const fonts: Option[] = [{ label: "Arial", value: "arial" }];
const weights: Option[] = [
  { label: "100", value: "100" },
  { label: "200", value: "200" },
  { label: "300", value: "300" },
  { label: "400", value: "400" },
  { label: "500", value: "500" },
  { label: "600", value: "600" },
  { label: "700", value: "700" },
  { label: "800", value: "800" },
  { label: "900", value: "900" }
];
const breakings: Option[] = [
  { label: "Normal", value: "normal" },
  { label: "No Wrap", value: "no-wrap" },
  { label: "Pre", value: "pre" },
  { label: "Pre Wrap", value: "pre-wrap" },
  { label: "Pre Line", value: "pre-line" },
  { label: "Break Space", value: "break-space" }
];

const Typography = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <EditorHeader
        title="Typography"
        clicked={clicked}
        setClicked={setClicked}
      />
      {clicked && (
        <>
          <EditComponentWraper>
            <Selector label="Font" span="1:3" options={fonts} />
            <Selector label="Weight" span="1:3" options={weights} />
            <Input label="Size" span="1:1" placeholder="--" />
            <Input label="Height" span="1:1" placeholder="--" />
            <ColorInput />

            <Label label="Align" span="1" />
            <div className="col-span-3 flex flex-wrap">
              <IconBox icon={<GrTextAlignLeft />} width="1/4" />
              <IconBox icon={<GrTextAlignRight />} width="1/4" />
              <IconBox icon={<GrTextAlignCenter />} width="1/4" />
              <IconBox icon={<GrTextAlignFull />} width="1/4" />
            </div>

            <Label label="Style" span="4" />
            <Label label="Italicize" span="1" />
            <div className="col-span-3 flex flex-wrap">
              <IconBox icon={<Exit />} width="1/2" />
              <IconBox icon={<BiItalic />} width="1/2" />
            </div>

            <span className="col-span-1 break-words text-xs text-blue-300">
              Decoration
            </span>
            <div className="col-span-3 flex flex-wrap">
              <IconBox icon={<Exit />} width="1/4" />
              <IconBox icon={<RiStrikethrough />} width="1/4" />
              <IconBox icon={<RiUnderline />} width="1/4" />
              <IconBox icon={<RxOverline />} width="1/4" />
            </div>
          </EditComponentWraper>
          <EditComponentWraper>
            <ToggleMore text="More type options" />

            <Input label="Letter Spacing" span="2:2" placeholder="--" />
            <Input label="Text Indent" span="2:2" placeholder="--" />

            <Label label="Capitalize" span="1" />
            <div className="col-span-3 flex flex-wrap">
              <IconBox icon={<Exit />} width="1/4" />
              <IconBox icon={<RxLetterCaseUppercase />} width="1/4" />
              <IconBox icon={<RxLetterCaseCapitalize />} width="1/4" />
              <IconBox icon={<RxLetterCaseLowercase />} width="1/4" />
            </div>

            <Label label="Direction" span="1" />
            <div className="col-span-3 flex flex-wrap">
              <IconBox icon={<MdFormatTextdirectionRToL />} width="1/2" />
              <IconBox icon={<MdFormatTextdirectionLToR />} width="1/2" />
            </div>

            <Selector label="Breaking" options={breakings} span="1:3" />

            <SaveEditButton />
          </EditComponentWraper>
        </>
      )}
    </div>
  );
};

export default Typography;
