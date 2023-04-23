"use client";
import { useState } from "react";
import { testData, testData2, testData3 } from "../builder/data-type";
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
