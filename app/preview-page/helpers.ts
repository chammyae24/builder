import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import { Fragment, createElement, ReactElement } from "react";
import { testData, testData2, testData3 } from "../builder/data-type";
import { jsxToString } from "../builder/Components/Preview/helpers";

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
        { key: data.id, ...data.props },
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
        { key: data.id, ...data.props },
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
    if (data.selfClosedTag) {
      return createElement(data.type, {
        key: data.id,
        ...data.props
      });
    }
    return createElement(
      data.type,
      { key: data.id, ...data.props },
      data.children ?? ""
    );
  }
};

const jsxString = jsxToString(elementsRender(testData));
const jsxString2 = jsxToString(elementsRender(testData2));
const jsxString3 = jsxToString(elementsRender(testData3));

const componentCodeString =
  "function Component() {\n\n return (<>\n" +
  jsxString +
  "\n" +
  jsxString2 +
  "\n" +
  jsxString3 +
  "\n" +
  "\n</>)}";

export const renderedString = prettier.format(componentCodeString, {
  parser: "babel",
  plugins: [parserBabel]
});
