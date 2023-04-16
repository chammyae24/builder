"use client";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as codeTheme from "react-syntax-highlighter/dist/esm/styles/prism";
import { ElementData, testData, testData2 } from "../../data-type";

const jsxGenerator = (
  data: ElementData | number | string
): (string | number)[] => {
  if (typeof data === "string" || typeof data === "number") {
    return [data];
  }

  if (
    data.children !== null &&
    typeof data.children !== "string" &&
    typeof data.children !== "number"
  ) {
    if (Array.isArray(data.children)) {
      if (data.type === null) {
        return [...data.children.map(child => jsxGenerator(child)).flat()];
      }
      return [
        "<" + data.type + ">",
        ...data.children.map(child => jsxGenerator(child)).flat(),
        "</" + data.type + ">"
      ];
    } else {
      if (data.type === null) {
        return [...jsxGenerator(data.children)];
      }
      return [
        "<" + data.type + ">",
        ...jsxGenerator(data.children),
        "</" + data.type + ">"
      ];
    }
  } else {
    if (data.type === null) {
      data.children;
      return [...jsxGenerator(data.children ?? "")];
    }
    return [data.children ?? ""];
  }
};

// ! This code should not be used. You have to find better method.
const str =
  "~~~jsx\nexport default function Component() {\n\n return (" +
  jsxGenerator(testData).toString().replaceAll(",", "") +
  ")}";
const str2 = prettier.format(str, {
  parser: "babel",
  plugins: [parserBabel]
});

const CodeComponent = () => {
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
