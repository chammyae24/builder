import Editor from "./Editor";
import Navigator from "./Navigator";
import Preview from "./Preview";

const BuilderPlayground = () => {
  return (
    <div className="flex self-stretch bg-builder">
      <Navigator />
      <Preview />
      <Editor />
    </div>
  );
};

export default BuilderPlayground;
