"use client";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as codeTheme from "react-syntax-highlighter/dist/esm/styles/prism";
import { ElementData, testData, testData2 } from "../../data-type";
import { str3 } from "@/app/preview-page/helpers";
import { jsxGenerator } from "./helpers";

// ! This code should not be used. You have to find better method.
// const str =
//   "export default function Component() {\n\n return (" +
//   jsxGenerator(testData).toString().replaceAll(",", "") +
//   ")}";
const str = "export default function Component() {\n\n return (" + str3 + ")}";
const str2 = prettier.format("~~~jsx\n" + str, {
  parser: "babel",
  plugins: [parserBabel]
});

const CodeComponent = () => {
  console.log(str3);

  return (
    <div>
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
        {str2}
      </ReactMarkdown>
    </div>
  );
};

export default CodeComponent;
