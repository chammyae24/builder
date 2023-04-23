"use client";
import { useState } from "react";
import { testData, testData2, testData3 } from "../builder/data-type";
import { elementsRender } from "./helpers";

const RenderedElement = () => {
  const [todo, setTodo] = useState("");

  return (
    <>
      {elementsRender(testData)}
      {elementsRender(testData2)}
      {elementsRender(testData3, todo, setTodo)}
      {elementsRender(todo)}
    </>
  );
};

// console.log(elementsRender(testData));

export default RenderedElement;
