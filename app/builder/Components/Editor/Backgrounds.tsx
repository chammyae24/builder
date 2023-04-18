"use client";
import { useState } from "react";
import { BiGridHorizontal, BiGridVertical } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { RiGradienterFill } from "react-icons/ri";
import { MdImage, MdGradient } from "react-icons/md";
import { ImCheckboxUnchecked } from "react-icons/im";
import EditComponentWraper from "./EditComponentWraper";
import EditorHeader from "./EditorHeader";
import { Exit, Plus } from "./Icons";
import {
  ColorInput,
  FileInput,
  IconBox,
  Input,
  Label,
  ToggleMore
} from "./EditorComponents";
import SaveEditButton from "./SaveEditButton";

const Backgrounds = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <EditorHeader
        title="Backgrounds"
        clicked={clicked}
        setClicked={setClicked}
      />
      {clicked && (
        <EditComponentWraper>
          <ToggleMore text="Background image" />

          <Label label="Type" span="1" />
          <div className="col-span-3 flex flex-wrap">
            <IconBox icon={<MdImage />} width="1/4" />
            <IconBox icon={<MdGradient />} width="1/4" />
            <IconBox icon={<RiGradienterFill />} width="1/4" />
            <IconBox icon={<ImCheckboxUnchecked />} width="1/4" />
          </div>

          <FileInput />

          <Label label="Size" span="1" />
          <div className="col-span-3 flex flex-wrap">
            <IconBox
              icon={<span className="text-[10px]">Custom</span>}
              width="1/3"
            />
            <IconBox
              icon={<span className="text-[10px]">Cover</span>}
              width="1/3"
            />
            <IconBox
              icon={<span className="text-[10px]">Contain</span>}
              width="1/3"
            />
          </div>

          <Input label="Width" placeholder="--" span="1:1" />
          <Input label="Height" placeholder="--" span="1:1" />

          <Label label="Position" span="1" />
          <div className="col-span-3 grid grid-cols-4">
            <Input label="Left" placeholder="--" span="2:2" />
            <Input label="Top" placeholder="--" span="2:2" />
          </div>

          <Label label="Tile" span="1" />
          <div className="col-span-3 flex flex-wrap">
            <IconBox icon={<CgMenuGridR />} width="1/4" />
            <IconBox icon={<BiGridHorizontal />} width="1/4" />
            <IconBox icon={<BiGridVertical />} width="1/4" />
            <IconBox icon={<Exit />} width="1/4" />
          </div>

          <div className="col-span-4 flex flex-wrap">
            <IconBox
              icon={<span className="text-[10px]">Fixed</span>}
              width="1/2"
            />
            <IconBox
              icon={<span className="text-[10px]">Not Fixed</span>}
              width="1/2"
            />
          </div>

          <ColorInput />

          <Label label="Clipping" span="1" />
          <div className="col-span-3 flex flex-wrap">
            <IconBox
              icon={<span className="text-[10px]">Padding</span>}
              width="1/3"
            />
            <IconBox
              icon={<span className="text-[10px]">Content</span>}
              width="1/3"
            />
            <IconBox
              icon={<span className="text-[10px]">Text</span>}
              width="1/3"
            />
          </div>

          <SaveEditButton />
        </EditComponentWraper>
      )}
    </div>
  );
};

export default Backgrounds;
