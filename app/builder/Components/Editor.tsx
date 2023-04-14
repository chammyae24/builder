import Backgrounds from "./Editor/Backgrounds";
import Borders from "./Editor/Borders";
import Effects from "./Editor/Effects";
import LayoutComponent from "./Editor/LayoutComponent";
import Position from "./Editor/Position";
import Size from "./Editor/Size";
import Spacing from "./Editor/Spacing";
import Typography from "./Editor/Typography";

const Editor = () => {
  return (
    <div className="col-span-1 border-l border-gray-500">
      <LayoutComponent />
      <Spacing />
      <Size />
      <Position />
      <Typography />
      <Backgrounds />
      <Borders />
      <Effects />
    </div>
  );
};

export default Editor;
