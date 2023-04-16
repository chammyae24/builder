"use client";
import { Fragment, ReactElement, createElement } from "react";
import { ElementData, testData, testData2 } from "../builder/data-type";
import { jsxToString, JSXElement } from "../builder/Components/Preview/helpers";
import { elementsRender } from "./helpers";

const RenderedElement = () => {
  return (
    <>
      {elementsRender(testData)}
      {elementsRender(testData2)}
    </>
  );
};

// console.log(elementsRender(testData));

export default RenderedElement;
