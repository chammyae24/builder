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
import { IconBox } from "./EditorComponents";
import { ToggleMore } from "./EditorComponents";

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
            <span className="col-span-1 text-xs text-blue-300">Font</span>
            <select className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs">
              <option value="">Arial</option>
            </select>

            <span className="col-span-1 text-xs text-blue-300">Weight</span>
            <select className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs">
              <option value="">100</option>
              <option value="">200</option>
              <option value="">300</option>
              <option value="">400</option>
              <option value="">500</option>
              <option value="">600</option>
              <option value="">700</option>
              <option value="">800</option>
              <option value="">900</option>
            </select>

            <span className="col-span-1 text-xs text-blue-300">Size</span>
            <input
              type="text"
              placeholder="--"
              className="w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
            />
            <span className="col-span-1 text-xs text-blue-300">Height</span>
            <input
              type="text"
              placeholder="--"
              className="w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
            />

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

            <span className="col-span-1 text-xs text-blue-300">Align</span>
            <div className="col-span-3 flex flex-wrap">
              <IconBox icon={<GrTextAlignLeft />} width="1/4" />
              <IconBox icon={<GrTextAlignRight />} width="1/4" />
              <IconBox icon={<GrTextAlignCenter />} width="1/4" />
              <IconBox icon={<GrTextAlignFull />} width="1/4" />
            </div>

            <span className="col-span-4 text-xs text-blue-300">Style</span>
            <span className="col-span-1 text-xs text-blue-300">Italicize</span>
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
            <span className="col-span-2 text-xs text-blue-300">
              Letter Spacing
            </span>
            <input
              type="text"
              placeholder="--"
              className="col-span-2 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
            />

            <span className="col-span-2 text-xs text-blue-300">
              Text Indent
            </span>
            <input
              type="text"
              placeholder="--"
              className="col-span-2 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs"
            />

            <span className="col-span-1 break-words text-xs text-blue-300">
              Capitalize
            </span>
            <div className="col-span-3 flex flex-wrap">
              <IconBox icon={<Exit />} width="1/4" />
              <IconBox icon={<RxLetterCaseUppercase />} width="1/4" />
              <IconBox icon={<RxLetterCaseCapitalize />} width="1/4" />
              <IconBox icon={<RxLetterCaseLowercase />} width="1/4" />
            </div>

            <span className="col-span-1 break-words text-xs text-blue-300">
              Direction
            </span>
            <div className="col-span-3 flex flex-wrap">
              <IconBox icon={<MdFormatTextdirectionRToL />} width="1/2" />
              <IconBox icon={<MdFormatTextdirectionLToR />} width="1/2" />
            </div>

            <span className="col-span-1 text-xs text-blue-300">Breaking</span>
            <select className="col-span-3 w-full border-2 border-builder-darker bg-builder-box px-1 text-xs">
              <option value="">Normal</option>
              <option value="">No Wrap</option>
              <option value="">Pre</option>
              <option value="">Pre Wrap</option>
              <option value="">Pre Line</option>
              <option value="">Break Space</option>
            </select>
          </EditComponentWraper>
        </>
      )}
    </div>
  );
};

export default Typography;
