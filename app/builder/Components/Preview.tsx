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

      {tab === 1 && (
        <iframe
          src="/preview-page"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      )}
      {tab === 2 && <CodeComponent />}
    </div>
  );
};

export default Preview;
