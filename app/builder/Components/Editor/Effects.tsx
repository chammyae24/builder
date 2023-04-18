"use client";
import { useState } from "react";
import EditComponentWraper from "./EditComponentWraper";
import EditorHeader from "./EditorHeader";
import { ToggleMore } from "./EditorComponents";
import SaveEditButton from "./SaveEditButton";

const Effects = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div>
      <EditorHeader title="Effects" clicked={clicked} setClicked={setClicked} />
      {clicked && (
        <EditComponentWraper>
          <ToggleMore text="Box Shadow" />
          <ToggleMore text="2D & 3D Transform" />
          <ToggleMore text="Transitions" />
          <ToggleMore text="Filters" />
          <ToggleMore text="Backdrop Filters" />

          <SaveEditButton />
        </EditComponentWraper>
      )}
    </div>
  );
};

export default Effects;
