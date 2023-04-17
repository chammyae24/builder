export interface ElementData {
  id: string;
  type: string | null;
  children: ElementData | ElementData[] | string | number | null;
  closedTag?: boolean;
}

export interface ComponentData {
  component: ElementData;
}

export const testData: ElementData = {
  id: "10",
  type: "div",
  closedTag: true,
  children: {
    id: "2",
    type: "div",
    closedTag: true,
    children: [
      {
        id: "3",
        type: "div",
        closedTag: true,
        children: {
          id: "4",
          type: "div",
          closedTag: true,
          children: {
            id: "5",
            type: "div",
            closedTag: true,
            children: {
              id: "112",
              type: null,
              children: "Hello. This is from id - 5."
            }
          }
        }
      },
      {
        id: "6",
        type: "h3",
        closedTag: true,
        children: {
          id: "111",
          type: null,
          children: "Hello. This is from id - 6. (H3)"
        }
      }
    ]
  }
};

export const testData2: ElementData = {
  id: "1",
  type: "div",
  closedTag: true,
  children: [
    {
      id: "2",
      type: "h1",
      closedTag: true,
      children: {
        id: "4",
        type: "span",
        closedTag: true,
        children: {
          id: "100",
          type: null,
          children: "Hello. This is from id - 4. (H1)"
        }
      }
    },
    {
      id: "3",
      type: "div",
      closedTag: true,
      children: {
        id: "5",
        type: null,
        children: [
          {
            id: "6",
            type: null,
            children: "Hello. This is from id - 5."
          },
          {
            id: "7",
            type: null,
            children: 6
          }
        ]
      }
    }
  ]
};

export const testData3: ElementData = {
  id: "101",
  type: "div",
  children: {
    id: "11",
    type: "span",
    children: {
      id: "12",
      type: null,
      children: 5
    }
  }
};

export const testComponent: ComponentData = {
  component: testData
};
