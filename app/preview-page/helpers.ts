import { Fragment, createElement, ReactElement } from "react";
import { testData, testData2, testData3 } from "../builder/data-type";
import { jsxToString } from "../builder/Components/Preview/helpers";

export const elementsRender = (
  data: ElementData | number | string,
  ...args: any[]
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
          data.children.map(child => elementsRender(child, ...args))
        );
      }
      return createElement(
        data.type,
        { key: data.id, ...data.props },
        data.children.map(child => elementsRender(child, ...args))
      );
    } else {
      if (data.type === null) {
        return createElement(
          Fragment,
          { key: data.id },
          elementsRender(data.children, ...args)
        );
      }
      return createElement(
        data.type,
        { key: data.id, ...data.props },
        elementsRender(data.children, ...args)
      );
    }
  } else {
    if (data.type === null) {
      return createElement(
        Fragment,
        { key: data.id },
        elementsRender(data.children ?? "", ...args)
      );
    }
    if (data.selfClosedTag) {
      return createElement(data.type, {
        key: data.id,
        ...data.props,
        value: args[0],
        onChange: (e: any) => args[1](e.target.value)
      });
    }
    return createElement(
      data.type,
      { key: data.id, ...data.props },
      data.children ?? ""
    );
  }
};

export const jsxString = jsxToString(elementsRender(testData));
export const jsxString2 = jsxToString(elementsRender(testData2));
export const jsxString3 = jsxToString(elementsRender(testData3));
