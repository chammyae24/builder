interface ElementData {
  id: string;
  type: string | null;
  children: ElementData | ElementData[] | string | number | null;
  selfClosedTag?: boolean;
  props?: any;
}

interface JSXElement {
  type: string | Function;
  props: {
    [propName: string]: any;
    children?: JSXElement | JSXElement[] | string | number;
  };
}
