const baseStyle = {
  padding: "4px",
  margin: "4px",
  outline: "1px dashed"
};

export const testData: ElementData = {
  id: "10",
  type: "div",
  selfClosedTag: false,
  props: {
    style: { ...baseStyle, outlineColor: "red", backgroundColor: "#E4A010" }
  },
  children: {
    id: "2",
    type: "div",
    selfClosedTag: false,
    props: {
      style: {
        ...baseStyle,
        outlineColor: "green",
        backgroundColor: "#57A639"
      }
    },
    children: [
      {
        id: "3",
        type: "div",
        selfClosedTag: false,
        props: {
          style: {
            ...baseStyle,
            outlineColor: "red",
            backgroundColor: "#3E5F8A"
          }
        },
        children: {
          id: "4",
          type: "div",
          selfClosedTag: false,
          props: {
            style: {
              ...baseStyle,
              outlineColor: "green",
              backgroundColor: "#D53032"
            }
          },
          children: {
            id: "5",
            type: "div",
            selfClosedTag: false,
            props: {
              style: {
                ...baseStyle,
                outlineColor: "red",
                backgroundColor: "#8B8C7A"
              }
            },
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
        selfClosedTag: false,
        props: {
          style: {
            ...baseStyle,
            outlineColor: "red",
            backgroundColor: "#F8F32B"
          }
        },
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
  selfClosedTag: false,
  props: {
    style: {
      ...baseStyle,
      outlineColor: "green",
      backgroundColor: "#ED760E"
    }
  },
  children: [
    {
      id: "2",
      type: "h1",
      selfClosedTag: false,
      props: {
        style: {
          ...baseStyle,
          outlineColor: "red",
          backgroundColor: "#1E5945"
        }
      },
      children: {
        id: "4",
        type: "span",
        selfClosedTag: false,
        props: {
          style: {
            ...baseStyle,
            outlineColor: "green",
            backgroundColor: "#E1CC4F"
          }
        },
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
      selfClosedTag: false,
      props: {
        style: {
          ...baseStyle,
          outlineColor: "red",
          backgroundColor: "#C1876B"
        }
      },
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
  props: {
    style: {
      ...baseStyle,
      outlineColor: "green",
      backgroundColor: "#CF3476"
    }
  },
  children: {
    id: "11",
    type: "span",
    props: {
      style: {
        ...baseStyle,
        outlineColor: "red",
        backgroundColor: "#B32821"
      }
    },
    children: {
      id: "12",
      type: "input",
      props: {
        style: {
          ...baseStyle,
          outlineColor: "green"
        }
        // disabled: true
      },
      children: null,
      selfClosedTag: true
    }
  }
};
