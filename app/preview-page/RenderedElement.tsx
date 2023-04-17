"use client";
import { Fragment, ReactElement, createElement } from "react";
import {
  ElementData,
  testData,
  testData2,
  testData3
} from "../builder/data-type";
import { jsxToString, JSXElement } from "../builder/Components/Preview/helpers";
import { elementsRender } from "./helpers";

const RenderedElement = () => {
  return (
    <>
      {elementsRender(testData)}
      {elementsRender(testData2)}
      {elementsRender(testData3)}
    </>
  );
};

// console.log(elementsRender(testData));

export default RenderedElement;
