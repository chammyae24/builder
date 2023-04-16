export interface ElementData {
  id: string;
  type: string | null;
  children: ElementData | ElementData[] | string | number | null;
}

export const testData: ElementData = {
  id: "10",
  type: "div",
  children: {
    id: "2",
    type: "div",
    children: [
      {
        id: "3",
        type: "div",
        children: {
          id: "4",
          type: "div",
          children: {
            id: "5",
            type: "div",
            children: "Hello. This is from id - 5."
          }
        }
      },
      {
        id: "6",
        type: "h3",
        children: "Hello. This is from id - 6. (H3)"
      }
    ]
  }
};

export const testData2: ElementData = {
  id: "1",
  type: "div",
  children: [
    {
      id: "2",
      type: "h1",
      children: {
        id: "4",
        type: "span",
        children: "Hello. This is from id - 4. (H1)"
      }
    },
    {
      id: "3",
      type: "div",
      children: [
        {
          id: "5",
          type: null,
          children: "Hello. This is from id - 5."
        },
        {
          id: "6",
          type: null,
          children: 6
        }
      ]
    }
  ]
};
