import { ReactElement, createElement } from "react";
import { TestData, testData, testData2 } from "../testData";

const style = {
  padding: "4px",
  margin: "4px",
  color: "black",
  backgroundColor: "#fefefe",
  outline: "1px dashed red"
};

const elementsRender = (data: TestData): ReactElement => {
  if (data.children !== null && typeof data.children !== "string") {
    if (Array.isArray(data.children)) {
      return createElement(
        data.type,
        { style, key: data.id },
        data.children.map(child => elementsRender(child))
      );
    } else {
      return createElement(
        data.type,
        { style, key: data.id },
        elementsRender(data.children)
      );
    }
  } else {
    return createElement(
      data.type,
      { style, key: data.id },
      data.children ?? ""
    );
  }
};

const Preview = () => {
  return (
    <div className="col-span-3 min-h-[calc(100vh-_48px)]">
      <div>{elementsRender(testData)}</div>
      <div>{elementsRender(testData2)}</div>
    </div>
  );
};

export default Preview;
