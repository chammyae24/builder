"use client";

import { Fragment, ReactElement, createElement } from "react";
import { ElementData, testData, testData2 } from "../builder/data-type";

const style = {
  padding: "4px",
  margin: "4px",
  color: "black",
  backgroundColor: "#fefefe",
  outline: "1px dashed red"
};

const elementsRender = (data: ElementData | number | string): ReactElement => {
  if (typeof data === "string" || typeof data === "number") {
    return createElement(Fragment, null, data);
  }

  if (data.children !== null && typeof data.children !== "string") {
    if (Array.isArray(data.children)) {
      if (data.type === null) {
        return createElement(
          Fragment,
          { key: data.id },
          data.children.map(child => elementsRender(child))
        );
      }
      return createElement(
        data.type,
        { style, key: data.id },
        data.children.map(child => elementsRender(child))
      );
    } else {
      if (data.type === null) {
        return createElement(
          Fragment,
          { key: data.id },
          elementsRender(data.children)
        );
      }
      return createElement(
        data.type,
        { style, key: data.id },
        elementsRender(data.children)
      );
    }
  } else {
    if (data.type === null) {
      return createElement(
        Fragment,
        { key: data.id },
        elementsRender(data.children ?? "")
      );
    }
    return createElement(
      data.type,
      { style, key: data.id },
      data.children ?? ""
    );
  }
};

const RenderedElement = () => {
  return (
    <>
      {elementsRender(testData)}
      {elementsRender(testData2)}
    </>
  );
};

export default RenderedElement;
