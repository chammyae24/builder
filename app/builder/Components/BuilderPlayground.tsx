import Editor from "./Editor";
import Navigator from "./Navigator";
import Preview from "./Preview";

const BuilderPlayground = () => {
  return (
    <div className="grid grid-cols-5 bg-builder">
      <Navigator />
      <Preview />
      <Editor />
    </div>
  );
};

export default BuilderPlayground;
