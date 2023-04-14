import EditComponentWraper from "./EditComponentWraper";
import EditorHeader from "./EditorHeader";
import { Plus } from "./Icons";
import ToggleMore from "./ToggleMore";

const Effects = () => {
  return (
    <div>
      <EditorHeader title="Effects" />
      <EditComponentWraper>
        <ToggleMore text="Box Shadow" />
        <ToggleMore text="2D & 3D Transform" />
        <ToggleMore text="Transitions" />
        <ToggleMore text="Filters" />
        <ToggleMore text="Backdrop Filters" />
      </EditComponentWraper>
    </div>
  );
};

export default Effects;
