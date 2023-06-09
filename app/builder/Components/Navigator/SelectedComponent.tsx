"use client";
import {
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
  AiOutlineCloseSquare
} from "react-icons/ai";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";

type Props = {
  element: ElementData;
  iteratorIndex?: number;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const SelectedComponent = ({
  element,
  iteratorIndex = 0,
  selected,
  setSelected
}: Props): ReactElement => {
  const [clicked, setClicked] = useState(false);

  // console.log(element);

  let disabled =
    element.children === null ||
    typeof element.children === "string" ||
    typeof element.children === "number" ||
    (Array.isArray(element.children) &&
      element.children.every(a => a.type === null)) ||
    (!Array.isArray(element.children) && element.children.type === null);

  let content: ReactElement | ReactElement[] = <></>;
  if (
    clicked &&
    element.children &&
    typeof element.children !== "string" &&
    typeof element.children !== "number"
  ) {
    if (Array.isArray(element.children)) {
      content = element.children.map(child => (
        <SelectedComponent
          key={child.id}
          iteratorIndex={iteratorIndex + 1}
          element={child}
          selected={selected}
          setSelected={setSelected}
        />
      ));
    } else {
      content = (
        <SelectedComponent
          iteratorIndex={iteratorIndex + 1}
          element={element.children}
          selected={selected}
          setSelected={setSelected}
        />
      );
    }
  }

  return (
    <div className="relative">
      <div
        className={`mb-1 flex items-center gap-2 border ${
          selected === element.id
            ? "border-builder-box bg-builder-darker"
            : "border-builder-darker bg-builder-box"
        } p-2 text-white`}
        style={{
          marginLeft: iteratorIndex * 6
        }}
      >
        <button onClick={() => setClicked(b => !b)} disabled={disabled}>
          {!disabled ? (
            clicked ? (
              <AiOutlineMinusSquare className="text-blue-300" />
            ) : (
              <AiOutlinePlusSquare className="text-blue-300" />
            )
          ) : (
            <AiOutlineCloseSquare className="text-gray-500" />
          )}
        </button>
        <span
          className="flex-grow cursor-pointer text-xs font-bold"
          onClick={() => setSelected(element.id)}
        >
          {element.type}
        </span>
      </div>
      {content}
      {iteratorIndex > 0 ? (
        <div
          className="absolute -top-1 h-[calc(100%+_0.25rem)] border-r border-dotted border-blue-300"
          style={{
            left: iteratorIndex * 6 - 3 + "px"
          }}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectedComponent;
