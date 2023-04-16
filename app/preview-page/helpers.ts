import { Fragment, createElement, ReactElement } from "react";
import { ElementData, testData } from "../builder/data-type";
import { jsxToString } from "../builder/Components/Preview/helpers";

const style = {
  padding: "4px",
  margin: "4px",
  // color: "black",
  // backgroundColor: "#fefefe",
  outline: "1px dashed red"
};

export const elementsRender = (
  data: ElementData | number | string
): ReactElement => {
  if (typeof data === "string" || typeof data === "number") {
    return createElement(Fragment, null, data);
  }

  if (
    data.children !== null &&
    typeof data.children !== "string" &&
    typeof data.children !== "number"
  ) {
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
        { style, key: data.id, boo: true, hey: "hello", hi: [1, 2, 3] },
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

export const str3 = jsxToString(elementsRender(testData));
