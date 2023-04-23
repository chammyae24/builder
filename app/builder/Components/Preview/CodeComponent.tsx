"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as codeTheme from "react-syntax-highlighter/dist/esm/styles/prism";
import { renderedString } from "@/app/preview-page/helpers";

const CodeComponent = ({ show }: { show: boolean }) => {
  return (
    <div className={`${!show && "hidden"} rounded px-2`}>
      <ReactMarkdown
        components={{
          code: ({ node, inline, className, children, style, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={codeTheme.vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {"~~~jsx\n" + renderedString}
      </ReactMarkdown>
    </div>
  );
};

export default CodeComponent;
