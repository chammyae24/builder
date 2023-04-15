export interface TestData {
  id: string;
  type: string;
  children: TestData | TestData[] | string | null;
}

export const testData: TestData = {
  id: "1",
  type: "div",
  children: {
    id: "2",
    type: "div",
    children: [
      {
        id: "3",
        type: "h1",
        children: {
          id: "4",
          type: "span",
          children: {
            id: "5",
            type: "span",
            children: "Hello. This is from id - 5. (Span)"
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

export const testData2: TestData = {
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
      // children: "Hello. This is from id - 3. (Div)",
      children: null
    }
  ]
};
