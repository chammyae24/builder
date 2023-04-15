"use client";
import {
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
  AiOutlineCloseSquare
} from "react-icons/ai";
import { TestData } from "../Navigator";
import { useState } from "react";

type Props = {
  testData: TestData;
  testNum?: number;
};

const SelectedComponent = ({ testData, testNum = 0 }: Props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        className="mb-1 flex items-center gap-2 border border-white bg-builder-box p-2"
        style={{
          marginLeft: testNum * 6
        }}
      >
        <button
          className=""
          onClick={() => setClicked(b => !b)}
          disabled={testData.children ? false : true}
        >
          {testData.children ? (
            clicked ? (
              <AiOutlineMinusSquare />
            ) : (
              <AiOutlinePlusSquare />
            )
          ) : (
            <AiOutlineCloseSquare className="text-gray-500" />
          )}
        </button>
        <span className="text-xs">{testData.type}</span>
      </div>
      {clicked && testData.children && (
        <SelectedComponent testNum={testNum + 1} testData={testData.children} />
      )}
    </>
  );
};

export default SelectedComponent;
