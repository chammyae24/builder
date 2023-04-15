"use client";
import {
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
  AiOutlineCloseSquare
} from "react-icons/ai";
import { TestData } from "../../testData";
import { ReactElement, useState } from "react";

type Props = {
  testData: TestData;
  testNum?: number;
};

const SelectedComponent = ({ testData, testNum = 0 }: Props) => {
  const [clicked, setClicked] = useState(false);

  let disabled =
    testData.children === null || typeof testData.children === "string";

  let content: ReactElement | ReactElement[] = <></>;
  if (clicked && testData.children && typeof testData.children !== "string") {
    if (Array.isArray(testData.children)) {
      content = testData.children.map(child => (
        <SelectedComponent
          key={child.id}
          testNum={testNum + 1}
          testData={child}
        />
      ));
    } else {
      content = (
        <SelectedComponent testNum={testNum + 1} testData={testData.children} />
      );
    }
  }

  return (
    <>
      <div
        className="mb-1 flex items-center gap-2 border border-builder-darker bg-builder-box p-2"
        style={{
          marginLeft: testNum * 6
        }}
      >
        <button
          className=""
          onClick={() => setClicked(b => !b)}
          disabled={disabled}
        >
          {!disabled ? (
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
      {content}
    </>
  );
};

export default SelectedComponent;
