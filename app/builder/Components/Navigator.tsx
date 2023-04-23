"use client";
import { useState } from "react";
import { testData, testData2, testData3 } from "../data-type";
import SelectedComponent from "./Navigator/SelectedComponent";

const Navigator = () => {
  const [selected, setSelected] = useState<string>("");
  return (
    <div className=" w-[273px] border-r border-gray-500 p-1">
      <SelectedComponent
        element={testData}
        selected={selected}
        setSelected={setSelected}
      />
      <SelectedComponent
        element={testData2}
        selected={selected}
        setSelected={setSelected}
      />
      <SelectedComponent
        element={testData3}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default Navigator;
