"use client";
import { useState } from "react";
import CodeComponent from "./Preview/CodeComponent";

const Preview = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="min-h-[calc(100vh-_48px)] flex-auto">
      <button
        onClick={() => setTab(1)}
        className="bg-white px-2 py-1 text-black"
      >
        1
      </button>
      <button
        onClick={() => setTab(2)}
        className="bg-white px-2 py-1 text-black"
      >
        2
      </button>

      <div className="h-[calc(100vh-_80px)] overflow-y-auto">
        <iframe
          src="/preview-page"
          className={`h-full w-full ${tab !== 1 && "hidden"}`}
          frameBorder="0"
        />
        <CodeComponent show={tab === 2} />
      </div>
    </div>
  );
};

export default Preview;
