import { ElementData } from "../../data-type";

export const jsxGenerator = (
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

export interface JSXElement {
  type: string | Function;
  props: {
    [propName: string]: any;
    children?: JSXElement | JSXElement[];
  };
}

export const jsxToString = (component: JSXElement): string => {
  const { type, props } = component;

  if (!type || typeof type === "symbol") {
    return "";
  }
  // Start building the string representation of the JSX component
  let str =
    "<" +
    `${typeof type === "function" ? (type as Function).name : type.toString()}`;

  //   Add props as attributes to the opening tag
  for (let propName in props) {
    if (props.hasOwnProperty(propName) && propName !== "children") {
      let propValue = props[propName];

      if (typeof propValue === "string") {
        str += ` ${propName}="${propValue}"`;
      } else {
        // If the prop value is a function, convert it to a string
        if (typeof propValue === "function") {
          propValue = propValue.toString();
        }
        if (typeof propValue === "object") {
          propValue = JSON.stringify(propValue).replaceAll(`"`, `'`);
        }

        str += ` ${propName}={${propValue}}`;
      }
    }
  }

  // If the component has children, recursively convert them to strings
  if (props.children) {
    str += ">";

    if (Array.isArray(props.children)) {
      props.children.forEach(child => {
        str += jsxToString(child);
      });
    } else {
      str += jsxToString(props.children as JSXElement);
    }

    // Close the opening tag
    str += `</${typeof type === "function" ? (type as Function).name : type}>`;
  } else {
    // Close the self-closing tag
    str += " />";
  }

  return str;
};
