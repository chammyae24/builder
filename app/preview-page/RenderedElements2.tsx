"use client";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import { renderedString } from "./helpers";

const RenderedElements2 = () => {
  return (
    <LiveProvider code={renderedString}>
      <LiveError className="m-2 rounded border border-orange-500 bg-orange-100 p-2 text-orange-700" />
      <LivePreview />
    </LiveProvider>
  );
};

export default RenderedElements2;
