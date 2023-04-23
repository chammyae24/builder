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

// ! DANGER THIS FUNCTION IS NEEDED TO BE SURE
export const jsxToString = (component: JSXElement): string => {
  const { type, props } = component;

  let str = "";
  if (!type || typeof type === "symbol") {
    if (Array.isArray(props.children)) {
      props.children.forEach(child => {
        if (
          typeof props.children === "string" ||
          typeof props.children === "number"
        ) {
          str += child.toString();
        } else {
          str += jsxToString(child);
        }
      });
    } else {
      if (
        typeof props.children === "string" ||
        typeof props.children === "number"
      ) {
        str += props.children.toString();
      } else {
        if (props.children) {
          str += jsxToString(props.children);
        }
      }
    }
    return str;
  }

  // Start building the string representation of the JSX component
  str +=
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
          console.log("function");

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
    str += ">\n";
    if (Array.isArray(props.children)) {
      props.children.forEach(child => {
        if (
          typeof props.children === "string" ||
          typeof props.children === "number"
        ) {
          // ! Important
          // str += child.toString();
          // str += `{${JSON.stringify(child)}}`;
        } else {
          str += jsxToString(child);
        }
      });
    } else {
      if (
        typeof props.children === "string" ||
        typeof props.children === "number"
      ) {
        // ! Important
        // str += props.children.toString();
        // str += `{${JSON.stringify(props.children)}}`;
      } else {
        str += jsxToString(props.children);
      }
    }

    // Close the opening tag
    str += `</${
      typeof type === "function" ? (type as Function).name : type.toString()
    }>`;
  } else {
    // Close the self-closing tag
    str += " />";
  }

  return str;
};
